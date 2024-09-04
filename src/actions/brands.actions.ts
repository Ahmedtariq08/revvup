import { adminDb } from "@/config/firebaseAdmin";
import { Brand } from "@/types/brands.schema";

export const getAllBrands = async (): Promise<Brand[]> => {
    try {
        const brandsSnapshot = await adminDb.collection("brands").get();
        const brands: Brand[] = [];
        brandsSnapshot.forEach((doc) => {
            brands.push({ id: doc.id, ...doc.data() } as Brand);
        });
        return brands;
    } catch (error) {
        return [];
    }
};
