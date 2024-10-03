import { getBrandsWithModels } from "@/actions/cars/brands";
import SearchCars from "@/components/buy/SearchCars";

const BuyPage = async () => {
    const brands = await getBrandsWithModels();
    return (
        <>
            <SearchCars initialBrands={brands} />
        </>
    );
};

export default BuyPage;
