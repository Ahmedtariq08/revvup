// 'use server'

// import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase-admin/auth';
// import { getFirestore } from 'firebase-admin/firestore';
// import { initializeApp, cert } from 'firebase-admin/app';
// import axios from 'axios';

// export async function signUp(formData: FormData) {
//   const displayName = formData.get('displayName') as string;
//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;
//   const photo = formData.get('photo') as File;

//   try {
//     // 1. Upload photo to Cloudinary
//     let photoUrl = '';
//     if (photo) {
//       photoUrl = await uploadToCloudinary(photo);
//     }

//     // 2. Create user in Firebase Authentication
//     const auth = getAuth();
//     const userRecord = await auth.createUser({
//       email,
//       password,
//       displayName,
//       photoURL: photoUrl,
//     });

//     // 3. Add user details to Firestore
//     const db = getFirestore();
//     await db.collection('users').doc(userRecord.uid).set({
//       displayName,
//       email,
//       photoUrl,
//       createdAt: new Date(),
//     });

//     return { success: true, message: 'User successfully created' };
//   } catch (error) {
//     console.error('Error in signUp:', error);
//     return { success: false, message: (error as Error).message };
//   }
// }

// async function uploadToCloudinary(file: File): Promise<string> {
//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', 'your_cloudinary_upload_preset');

//   try {
//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
//       formData
//     );
//     return response.data.secure_url;
//   } catch (error) {
//     throw new Error('Failed to upload image to Cloudinary');
//   }
// }
