// import Image from "next/image";

// export default function Home() {
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <h1>Hi Ahmed</h1>
//         </main>
//     );
// }

"use client";
import AuthForm from "@/components/AuthForm";

const SignInPage = () => {
    return <AuthForm isSignIn={true} />;
};

export default SignInPage;
