const bodyTypes = {
    2: "Hatchback",
    1: "Sedan",
    4: "SUV",
    3: "MPV",
    6: "Coupe",
    5: "Truck",
    8: "Wagon",
    9: "Convertible",
};

const transmissions = {
    1: "Manual",
    2: "Automatic",
};

const colorTypes = {
    1: "Black",
    2: "White",
    3: "Gray",
    4: "Silver",
    5: "Red",
    6: "Blue",
    7: "Brown",
    8: "Gold",
    9: "Green",
    10: "Orange",
    11: "Beige",
    12: "Purple",
    13: "Bronze",
    14: "Other",
};

const stores = {
    21: "PJ Automall",
    23: "Cheras",
    24: "Kepong",
    25: "Setiawangsa",
    26: "Johor Jaya",
    30: "Juru",
    31: "Setia Spice",
    32: "Kuantan",
    33: "Seremban",
    34: "Melaka",
    35: "Ipoh",
    36: "Taman Sutera",
    41: "Kota Kinabalu",
    42: "Kuching",
    43: "Chan Sow Lin",
    44: "Sitawan",
    45: "Alor Setar",
    46: "Temerloh",
    47: "Kuala Terengganu",
};

const places = [
    {
        placeId: "pulau-pinang",
        place: "Pulau Pinang",
    },
    {
        placeId: "perak",
        place: "Perak",
    },
    {
        placeId: "johor",
        place: "Johor",
    },
    {
        placeId: "kuala-lumpur",
        place: "Kuala Lumpur",
    },
    {
        placeId: "selangor",
        place: "Selangor",
    },
    {
        placeId: "sabah",
        place: "Sabah",
    },
    {
        placeId: "negeri-sembilan",
        place: "Negeri Sembilan",
    },
];

const locations = [
    {
        location: "CARSOME Juru, Pulau Pinang",
        locationId: "perai",
        locationAddress: "",
        locationName: "Perai",
    },
    {
        location: "CARSOME Ipoh, Perak",
        locationId: "ipoh",
        locationAddress: "",
        locationName: "Ipoh",
    },
    {
        location: "CARSOME Taman Sutera (Skudai), Johor",
        locationId: "johor-bharu",
        locationAddress: "",
        locationName: "Johor Bharu",
    },
    {
        location: "CARSOME Chan Sow Lin, Kuala Lumpur",
        locationId: "kuala-lumpur",
        locationAddress: "",
        locationName: "Kuala Lumpur",
    },
    {
        location: "CARSOME Cheras, Selangor",
        locationId: "cheras",
        locationAddress: "",
        locationName: "Cheras",
    },
    {
        location: "CARSOME Johor Jaya, Johor",
        locationId: "masai",
        locationAddress: "",
        locationName: "Masai",
    },
    {
        location: "CARSOME Setia SPICE, Pulau Pinang",
        locationId: "bayan-lepas",
        locationAddress: "",
        locationName: "Bayan Lepas",
    },
    {
        location: "CARSOME Kota Kinabalu, Sabah",
        locationId: "kota-kinabalu",
        locationAddress: "",
        locationName: "Kota Kinabalu",
    },
    {
        location: "CARSOME Seremban, Negeri Sembilan",
        locationId: "seremban",
        locationAddress: "",
        locationName: "Seremban",
    },
];

const obj = {
    brandId: 157,
    brandModelName: "Perodua Bezza",
    brandName: "Perodua",
    carEngine: "1.3",
    carId: 58841,
    carListingDate: "14/04/2024",
    carMileage: 114594,
    carName: "2016 Perodua Bezza X Premium 1.3",
    carNo: "CWRA100",
    carTransmission: 2,
    carTransmissionName: "Automatic",
    carVariant: "X Premium",
    carYear: 2016,
    color: 7,
    colorName: "",
    description: "",
    expSellingPrice: "34800",
    fuelType: 1,
    fuelTypeName: "",
    highLightTags: ["Keyless Push Start", "ABS Brake", "SRS Airbag", "Alarm System"],
    image: "https://b2c-cdn.carsome.my/B2C/7172b523-4a60-4560-b727-233d3d4bd68c.jpg",
    location: "CARSOME Ipoh, Perak",
    locationAddress: "",
    locationId: "ipoh",
    locationName: "Ipoh",
    modelId: 2424,
    modelName: "Bezza",
    monthPayment: 327,
    monthPrice: 327,
    place: "Perak",
    placeId: "perak",
    price: 29800,
    seat: 3,
    storeId: 35,
    storeName: "CARSOME Ipoh",
    saleStatus: 2,
    imagesInner: [
        {
            id: 733462,
            sourceId: 0,
            type: 0,
            name: "1-Front Panel Dashboard",
            url: "https://b2c-cdn.carsome.my/B2C/aa31990c-0ad3-4d5a-9eeb-f7f5bd30aeb8.jpg",
            order: 1,
            Status: 0,
        },
        {
            id: 733463,
            sourceId: 0,
            type: 0,
            name: "2-Dashboard",
            url: "https://b2c-cdn.carsome.my/B2C/5f1d4a2c-bb42-4f8f-a879-4f162248cd0e.jpg",
            order: 2,
            Status: 0,
        },
        {
            id: 733464,
            sourceId: 0,
            type: 0,
            name: "3-Odometer/Instrument Cluster",
            url: "https://b2c-cdn.carsome.my/B2C/cc15c5b0-9dbe-41a1-82e8-f96d33c56ace.jpg",
            order: 3,
            Status: 0,
        },
        {
            id: 733465,
            sourceId: 0,
            type: 0,
            name: "4-Drive Seat View",
            url: "https://b2c-cdn.carsome.my/B2C/d14b8dbf-c442-4f4b-a528-6ea748d83489.jpg",
            order: 4,
            Status: 0,
        },
        {
            id: 733466,
            sourceId: 0,
            type: 0,
            name: "5-Infotainment System Main Menu",
            url: "https://b2c-cdn.carsome.my/B2C/9a26bd61-3ee7-459c-8f25-e99e479f80a0.jpg",
            order: 5,
            Status: 0,
        },
        {
            id: 733467,
            sourceId: 0,
            type: 0,
            name: "6-Rear Seat",
            url: "https://b2c-cdn.carsome.my/B2C/21b459ff-bd96-43ca-a6f8-c7fea07709e6.jpg",
            order: 6,
            Status: 0,
        },
        {
            id: 733468,
            sourceId: 0,
            type: 0,
            name: "7-Car Trunk",
            url: "https://b2c-cdn.carsome.my/B2C/4d5ea26e-7d54-45cf-8229-25d3b242f091.jpg",
            order: 7,
            Status: 0,
        },
    ],
    imagesOuter: [
        {
            id: 733469,
            sourceId: 0,
            type: 0,
            name: "1-Front Right View",
            url: "https://b2c-cdn.carsome.my/B2C/7ba67701-3eb9-4f81-8f2d-4cc4f3a9c8af.jpg",
            order: 1,
            Status: 0,
        },
        {
            id: 733470,
            sourceId: 0,
            type: 0,
            name: "2-Right Side view",
            url: "https://b2c-cdn.carsome.my/B2C/9b30233f-43ec-47d8-905f-32452a5009db.jpg",
            order: 2,
            Status: 0,
        },
        {
            id: 733471,
            sourceId: 0,
            type: 0,
            name: "3-Back View",
            url: "https://b2c-cdn.carsome.my/B2C/ebbffaf5-a9e3-49bc-a3e4-de092ffecb1b.jpg",
            order: 3,
            Status: 0,
        },
        {
            id: 733472,
            sourceId: 0,
            type: 0,
            name: "4-Rear Left View",
            url: "https://b2c-cdn.carsome.my/B2C/1daf2fe6-9d0e-4860-bae1-b3ea4694dc3e.jpg",
            order: 4,
            Status: 0,
        },
        {
            id: 733473,
            sourceId: 0,
            type: 0,
            name: "5-Left Side View",
            url: "https://b2c-cdn.carsome.my/B2C/339ae257-3ede-4edc-bb5e-4377e67d9d8e.jpg",
            order: 5,
            Status: 0,
        },
        {
            id: 733474,
            sourceId: 0,
            type: 0,
            name: "6-Front View",
            url: "https://b2c-cdn.carsome.my/B2C/db44280c-7bf2-40d1-96c0-f1b1d9f766b3.jpg",
            order: 6,
            Status: 0,
        },
        {
            id: 733475,
            sourceId: 0,
            type: 0,
            name: "7-Wheels (Front Right)",
            url: "https://b2c-cdn.carsome.my/B2C/a2d02044-0d01-45ee-a5a8-79b28179950c.jpg",
            order: 7,
            Status: 0,
        },
        {
            id: 733476,
            sourceId: 0,
            type: 0,
            name: "8-Wheels (Back Right)",
            url: "https://b2c-cdn.carsome.my/B2C/0ca792de-5980-4a94-a3ba-95e06cd96dba.jpg",
            order: 8,
            Status: 0,
        },
        {
            id: 733477,
            sourceId: 0,
            type: 0,
            name: "9-Wheels (Front Left)",
            url: "https://b2c-cdn.carsome.my/B2C/372ef21f-5dd3-4892-a52e-e8aab8851a48.jpg",
            order: 9,
            Status: 0,
        },
        {
            id: 733478,
            sourceId: 0,
            type: 0,
            name: "10-Wheels (Back Left)",
            url: "https://b2c-cdn.carsome.my/B2C/d72a11f0-f8d3-4bde-8b72-8c71e1dcb95c.jpg",
            order: 10,
            Status: 0,
        },
        {
            id: 733479,
            sourceId: 0,
            type: 0,
            name: "11-Engine",
            url: "https://b2c-cdn.carsome.my/B2C/a8290c17-9e5e-45e7-8722-2377be194a72.jpg",
            order: 11,
            Status: 0,
        },
    ],
    licensePlate: "VB1671",
    vinCode: "PM2B301S003017901",
    carType: 1,
    allPrice: {
        price: "29800",
        monthPrice: "327",
        expSellingPrice: "34800",
        expSellingPriceWithoutVAT: "34800",
        expSellingMonthPrice: "381",
        campaignDiscountAmount: "5000",
        campaignPrice: "29800",
        campaignMonthPrice: "327",
        installmentDiscountAmount: "0",
        installmentPrice: "34800",
        installmentCampaignPrice: "29800",
        installmentMonthPrice: "327",
        campaignPriceWithoutVAT: "29800",
        VATAmount: "0",
        originalPrice: "34800",
    },
    hasOneYearWarranty: 1,
    commodityStatus: 2,
    commodityStatusName: "Listing",
    commodityStocks: 1,
};
