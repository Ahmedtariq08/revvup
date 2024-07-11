// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyArR18ty8p-_najVeuvbHSztIoj86zSu4s",
//   authDomain: "ebuddy-test-91258.firebaseapp.com",
//   projectId: "ebuddy-test-91258",
//   storageBucket: "ebuddy-test-91258.appspot.com",
//   messagingSenderId: "617266032522",
//   appId: "1:617266032522:web:09810e24751ea7bba76273",
//   measurementId: "G-Y16QS6LCXQ",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import * as admin from "firebase-admin";
import * as serviceAccount from "./service-account.json";
//import { getAuth } from "firebase/auth";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

// const db = admin.firestore();
// const auth = admin.auth();

export { admin };
