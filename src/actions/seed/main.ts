"use server";
import { seedBrandsAndModels } from "./brands";
import { seedCars } from "./cars";

export const seedSupabase = async () => {
    try {
        await seedBrandsAndModels();
        await seedCars();
    } catch (error) {
        console.log("Error in seeding supabase");
    }
};
