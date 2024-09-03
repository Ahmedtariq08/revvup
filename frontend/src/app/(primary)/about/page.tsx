import { getAllBrands } from "@/actions/brands.actions";

const AboutPage = async () => {
    const brands = await getAllBrands();
    return (
        <div>
            <ul>
                {brands.map((brand) => {
                    return <li key={brand.id}>{brand.brandName}</li>;
                })}
            </ul>
        </div>
    );
};

export default AboutPage;
