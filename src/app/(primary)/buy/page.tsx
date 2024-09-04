import { getAllBrands } from "@/actions/brands.actions";
import SearchCars from "@/components/buy/SearchCars";

const BuyPage = async () => {
    const brands = await getAllBrands();
    return (
        <>
            <SearchCars initialBrands={brands} />
        </>
    );
};

export default BuyPage;
