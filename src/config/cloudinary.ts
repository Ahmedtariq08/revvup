"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadPhoto = async (dataUri: string) => {
    try {
        const resposne = await cloudinary.uploader.upload(dataUri, {
            upload_preset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
            folder: "revvup",
        });
        return resposne.secure_url;
    } catch (error) {
        return "";
    }
};
