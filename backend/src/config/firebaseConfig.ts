import * as admin from "firebase-admin";
import * as serviceAccount from "./service-account.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

// Use emulators in development environment
if (process.env.NODE_ENV === "development") {
    process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
    process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
}

export { admin, db };
