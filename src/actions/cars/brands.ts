import { ArrayElement, AsyncReturnType } from "@/types/global.types";
import { createClient } from "@/utils/supabase/server";
import { error } from "console";

const supabase = createClient();

export const getBrandsWithModels = async () => {
    try {
        // Fetch brands with related models using a join query
        const { data, error } = await supabase
            .from("brands")
            .select("id, name, logo, models (id, name)")
            .order("id", { foreignTable: "models" });

        if (error) {
            console.error(
                "Error fetching brands with models from supabase.",
                error.message,
            );
            return [];
        }
        return data;
    } catch (err) {
        console.error("Error:", err);
        return [];
    }
};

export const getAllCars = async () => {
    try {
        const { data, error } = await supabase
            .from("cars")
            .select(
                `*, 
                places(place, id), 
                body_types(body, id)`,
            )
            .eq("is_available", true);
        if (error) {
            console.error("Error fetching cars", error.message);
            return [];
        }
        return data;
    } catch {
        console.error("Error in getting all cars:", error);
        return [];
    }
};

export type Car = ArrayElement<AsyncReturnType<typeof getAllCars>>;
export type Brand = ArrayElement<AsyncReturnType<typeof getBrandsWithModels>>;
