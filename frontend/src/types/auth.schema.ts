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

const BaseUserSchema = SignUpSchema.pick({ email: true, displayName: true }).extend({
    uid: z.string({ message: isRequired("Uid") }),
});

const UpdateUserSchema = SignUpSchema.pick({
    email: true,
    displayName: true,
    password: true,
})
    .partial()
    .extend({
        uid: z.string({ message: isRequired("Uid") }),
    });

type SignUpUser = z.infer<typeof SignUpSchema>;
type SignInUser = z.infer<typeof SignInSchema>;
type BaseUser = z.infer<typeof BaseUserSchema>;
type UpdateUser = z.infer<typeof UpdateUserSchema>;

export { SignUpSchema, SignInSchema, BaseUserSchema, UpdateUserSchema };
export type { SignInUser, SignUpUser, BaseUser, UpdateUser };
