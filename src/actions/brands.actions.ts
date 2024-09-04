import { Brand } from "@/types/brands.schema";
import { adminDb } from "@/utils/firebase/firebaseAdmin";

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
