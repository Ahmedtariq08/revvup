// Brands
interface Model {
    id: number;
    name: string;
}

export interface Brand {
    id: number;
    name: string;
    logo: string;
    model: Model[];
}

// Car
export type CarProviderCar = {
    _highlightResult: {
        brandName: {
            fullyHighlighted: boolean;
            matchLevel: string;
            matchedWords: string[] | null;
            value: string;
        };
        carName: {
            fullyHighlighted: boolean;
            matchLevel: string;
            matchedWords: string[] | null;
            value: string;
        };
        modelName: {
            matchLevel: string;
            matchedWords: string[] | null;
            value: string;
        };
    };
    matchRank: number;
    bottomMost: number;
    brandId: number;
    brandModelName: string;
    brandName: string;
    carCondition: number;
    carEnduranceMileage: number;
    carEngine: string;
    carId: number;
    carListingDate: string;
    carMileage: number;
    carName: string;
    carNo: string;
    carState: number;
    carStateName: string;
    carTag: string;
    carTagType: number;
    carTransmission: number;
    carTransmissionName: string;
    carTypeId: number;
    carTypeName: string;
    carVariant: string;
    carYear: number;
    color: number;
    colorName: string;
    dealerId: number;
    dealerName: string;
    dealerType: number;
    dealerTypeName: string;
    description: string;
    expSellingPrice: string;
    fuelType: number;
    fuelTypeName: string;
    highLightTags: string[];
    id: number;
    image: string;
    isDealer: number;
    location: string;
    locationAddress: string;
    locationId: string;
    locationName: string;
    modelId: number;
    modelName: string;
    monthPayment: number;
    monthPrice: number;
    objectID: string;
    place: string;
    placeId: string;
    price: number;
    seat: number;
    seq: number;
    stateId: string;
    stateName: string;
    storeId: number;
    storeName: string;
    favorite: number;
    carPrices: any | null;
    position: number;
    saleStatus: number;
    imagesInner: Image[];
    imagesOuter: Image[];
    campaignIds: number[];
    resH5DetailPriceBar: string;
    resH5ListItemTag: string;
    resWebDetailPriceBar: string;
    resWebListItemTag: string;
    cardDiscountTag: string;
    cardDiscountWordsBackgroundColor: string;
    cardDiscountWordsColor: string;
    campaignId: number;
    campaignDiscountPrice: number;
    campaignMonthPrice: number;
    campaignPrice: number;
    carTaggings: CarTagging[];
    licensePlate: string;
    vinCode: string;
    carType: number;
    carTypeKey: string;
    allPrice: PriceDetails;
    hasOneYearWarranty: number;
    commodityStatus: number;
    commodityStatusName: string;
    commodityStocks: number;
    campaignInfo: CampaignInfo;
};

type Image = {
    id: number;
    sourceId: number;
    type: number;
    name: string;
    url: string;
    order: number;
    Status: number;
};

type CarTagging = {
    id: number;
    tagType: number;
    tagName: string;
    tagNameLocal: string;
    fontColor: string;
    backgroundColor: string;
    iconUrl: string;
    status: number;
};

type PriceDetails = {
    price: string;
    monthPrice: string;
    expSellingPrice: string;
    expSellingPriceWithoutVAT: string;
    expSellingMonthPrice: string;
    campaignDiscountAmount: string;
    campaignPrice: string;
    campaignMonthPrice: string;
    installmentDiscountAmount: string;
    installmentPrice: string;
    installmentCampaignPrice: string;
    installmentMonthPrice: string;
    campaignPriceWithoutVAT: string;
    VATAmount: string;
    originalPrice: string;
};

type CampaignInfo = {
    campaignPrice: string;
    discountPrice: string;
    campaignMonthPrice: string;
    campaigns: Campaign[];
};

type Campaign = {
    campaignId: number;
    campaignName: string;
    campaignType: number;
    endTime: number;
    campaignLogo: string;
    termsAndCond: string;
};
