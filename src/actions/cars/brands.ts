import { AsyncReturnType } from "@/types/global.types";
import { createClient } from "@/utils/supabase/server";

export const getBrandsWithModels = async () => {
    try {
        // Fetch brands with related models using a join query
        const supabase = createClient();
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

export type BrandsWithModels = AsyncReturnType<typeof getBrandsWithModels>;
