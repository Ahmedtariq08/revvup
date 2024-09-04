import { z } from "zod";
import { isRequired } from "../utils";

const BrandSchema = z.object({
    id: z.string({ message: isRequired("id") }),
    brandName: z.string({ message: isRequired("Brand Name") }),
    logo: z.string(),
    models: z.array(z.string()),
});

type Brand = z.infer<typeof BrandSchema>;

export { BrandSchema };
export type { Brand };
