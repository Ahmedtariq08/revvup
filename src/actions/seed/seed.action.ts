"use server";
import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import brandsData from "./brands";
import { adminDb } from "@/config/firebaseAdmin";
import firebase from "firebase/compat/app";

const seedBrands = async () => {
    try {
        const brandCollection = "brands";
        await deleteCollection(brandCollection);
        for (const brand of brandsData) {
            //await setDoc(doc(db, "brands", brand.id), brand);
            await adminDb.collection(brandCollection).doc(brand.id).set(brand);
        }
        console.log("Brands seeded successfully.");
    } catch (error) {
        console.log("Unable to seed brands.");
    }
};

const deleteCollection = async (collection: string) => {
    adminDb
        .collection(collection)
        .listDocuments()
        .then((val) => {
            const chunks = [];
            for (let i = 0; i < val.length; i += 500) {
                chunks.push(val.slice(i, i + 500));
            }

            for (const chunk of chunks) {
                // Get a new write batch
                var batch = firebase.firestore().batch();
                chunk.map((document) => {
                    return batch.delete(document as any);
                });
                batch.commit();
            }
        });
};

export const seedFirestore = async () => {
    try {
        await seedBrands();
    } catch (error) {
        console.error("Error seeding Firestore:", error);
    }
};
