import Head from "next/head";
import Image from "next/image";
import background from "../../public/background2.jpg";
import wheelSvg from "../../public/icons/wheel.svg";

export default function Home() {
    return (
        <div className="min-h-screen relative">
            <Head>
                <title>Wheels & Deals - Find Your Perfect Drive</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/2.4.2/uicons-regular-rounded/css/uicons-regular-rounded.css"
                ></link>
                <script
                    src="https://kit.fontawesome.com/4c971e9c84.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>

            <div className="absolute inset-0 z-0">
                <Image
                    src={background}
                    layout="fill"
                    objectFit="cover"
                    alt="Background Car"
                />

                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <header className="relative z-10 p-2">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-gray-500 opacity-50 pointer-events-none"></div>
                <nav className="relative flex items-center justify-between">
                    <div className="relative w-16 h-auto sm:w-12 md:w-32 lg:w-16 xl:w-24">
                        <Image
                            src={wheelSvg}
                            alt="Wheels & Deals Logo"
                            layout="responsive"
                            width={1}
                            height={1}
                            className="object-contain"
                        />
                    </div>

                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto bebas-neue-regular">
                        Wheels & Deals
                    </h1>
                </nav>
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-5xl lg:text-7xl font-bold mb-8 leading-tight mt-20">
                    Find Your <i className="text-teal-500">Perfect</i> Drive
                </h2>

                <a href="/dashboard" className="teal-btn lg:text-5xl">
                    Browse
                </a>
            </main>
        </div>
    );
}
