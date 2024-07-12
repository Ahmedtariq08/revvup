import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import * as serviceAccount from "./service-account.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

//const db = admin.firestore();
const db = getFirestore();
export { admin, db };
