import * as admin from "firebase-admin";

const adminConfig = {
    credential: admin.credential.cert({
        type: process.env.TYPE,
        projectId: process.env.PROJECT_ID,
        privateKeyId: process.env.PRIVATE_KEY_ID,
        privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
        clientEmail: process.env.CLIENT_EMAIL,
        clientId: process.env.CLIENT_ID,
        authUri: process.env.AUTH_URI,
        tokenUri: process.env.TOKEN_URI,
        authProviderX509CertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
        clientX509CertUrl: process.env.CLIENT_X509_CERT_URL,
    } as admin.ServiceAccount),
};

if (!admin.apps.length) {
    admin.initializeApp(adminConfig);
}

const adminDb = admin.firestore();

export { adminDb };
