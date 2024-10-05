import { getAllCars, getBrandsWithModels } from "@/actions/cars/brands";
import CardGrid from "@/components/buy/CarGrid";
import SearchCars from "@/components/buy/SearchCars";

const BuyPage = async () => {
    const [brands, cars] = await Promise.all([
        getBrandsWithModels(),
        getAllCars(),
    ]);
    return (
        <>
            <SearchCars initialBrands={brands} />
            <CardGrid cars={cars} />
        </>
    );
};

export default BuyPage;
