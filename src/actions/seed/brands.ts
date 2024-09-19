"use server";
import { createClient } from "@/utils/supabase/server";
import { Brand } from "./types";

const supabase = createClient();

const getBrandsAndModels = async (): Promise<Brand[]> => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", process.env.BRAND_COOKIE ?? "");

        const response = await fetch(process.env.BRAND_URL ?? "", {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        });
        const data = await response.json();
        return Array.isArray(data.data) ? data.data : [];
    } catch (error) {
        console.error("Unable to fetch brands and models");
        return [];
    }
};

export const seedBrandsAndModels = async () => {
    const brands = await getBrandsAndModels();
    if (brands.length === 0) {
        console.log("No brands or models to seed");
        return;
    }

    for (const brandData of brands) {
        // Check if the brand already exists
        const { data: existingBrands, error: brandError } = await supabase
            .from("brands")
            .select("id")
            .eq("name", brandData.name);

        if (brandError) {
            console.error("Error checking existing brands:", brandError);
            continue;
        }

        let brandId: number;

        if (existingBrands.length > 0) {
            // Brand exists, use the existing ID
            brandId = existingBrands[0].id;
        } else {
            // Insert new brand
            const { data: insertedBrand, error: insertBrandError } =
                await supabase
                    .from("brands")
                    .insert([{ name: brandData.name, logo: brandData.logo }])
                    .select("id")
                    .single();

            if (insertBrandError) {
                console.error("Error inserting brand:", insertBrandError);
                continue;
            }

            brandId = insertedBrand.id;
        }

        // Seed models for the brand
        for (const modelData of brandData.model) {
            // Check if the model already exists
            const { data: existingModels, error: modelError } = await supabase
                .from("models")
                .select("id")
                .eq("name", modelData.name)
                .eq("brand_id", brandId);

            if (modelError) {
                console.error("Error checking existing models:", modelError);
                continue;
            }

            if (existingModels.length === 0) {
                // Insert new model
                const { error: insertModelError } = await supabase
                    .from("models")
                    .insert([{ name: modelData.name, brand_id: brandId }]);

                if (insertModelError) {
                    console.error("Error inserting model:", insertModelError);
                }
            }
        }
    }
};
