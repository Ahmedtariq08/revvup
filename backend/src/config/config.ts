import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.APP_PORT || 3000;
export const CLIENT_URL = process.env.FRONT_END_URL;
export const FIREBASE = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSENGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};
