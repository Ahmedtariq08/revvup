import { z } from "zod";
import { isRequired, minChars } from "../utils";

/* Schemas must match with backend API */
const SignUpSchema = z.object({
    email: z
        .string({ message: isRequired("Email address") })
        .email({ message: "Invalid email address" }),
    displayName: z
        .string({ message: isRequired("Display name") })
        .min(3, { message: minChars("Display Name", 3) }),
    password: z
        .string({ message: isRequired("Password") })
        .min(8, { message: minChars("Password", 8) }),
});

const SignInSchema = SignUpSchema.pick({
    email: true,
    password: true,
});

type SignUpUser = z.infer<typeof SignUpSchema>;
type SignInUser = z.infer<typeof SignInSchema>;

export { SignUpSchema, SignInSchema };
export type { SignInUser, SignUpUser };
