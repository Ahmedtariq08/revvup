import * as admin from "firebase-admin";
import * as serviceAccount from "./service-account.json";
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE } from "./config";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const firebaseApp = initializeApp(FIREBASE);
const auth = getAuth(firebaseApp);

export { auth, admin };
