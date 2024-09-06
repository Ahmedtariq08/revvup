// Define interfaces for your Firestore documents

// interface User {
//     uid: string;
//     email: string;
//     displayName: string;
//     phone: string;
//     location: {
//         address: string;
//         city: string;
//         postalCode: number;
//     };
//     photoUrl: string;
//     role: "customer" | "dealer" | "admin";
//     favourites: string[]; // reference to car id in car collection
// }

interface Dealership {
    id: string;
    name: string;
    location: {
        address: string;
        city: string;
        postalCode: number;
    };
    contactInfo: {
        phone: string;
        email: string;
    };
    carsAvailable: string[]; // reference to car id in car collection
}

interface Car {
    id: string;
    brand: string; // reference to brand id in brand collection
    model: string;
    year: number;
    dealership: string; // reference to dealrship id
    pricePerDay: number;
    availability: boolean;
    images: string[];
    features: string[];
    uploadedAt: string; // timestamp
}
