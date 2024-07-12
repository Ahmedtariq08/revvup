import { z } from "zod";
import { isRequired, minChars } from "../utils";

// User types and schema
const UserSchema = z.object({
    id: z.string({ message: isRequired("Id") }),
    email: z
        .string({ message: isRequired("Email address") })
        .email({ message: "Invalid email address" }),
    displayName: z
        .string({ message: isRequired("Display name") })
        .min(3, { message: minChars("Display Name", 3) }),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
});

const UpdateUserSchema = UserSchema.partial().merge(
    z.object({
        id: z.string({ message: isRequired("Id") }),
    }),
);

const CreateUserSchema = UserSchema.omit({
    id: true,
});

type User = z.infer<typeof UserSchema>;
type UpdateUser = z.infer<typeof UpdateUserSchema>;
type CreateUser = z.infer<typeof CreateUserSchema>;

export { UserSchema, UpdateUserSchema, CreateUserSchema };
export type { User, UpdateUser, CreateUser };

// Auth schemas and types
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

export { SignUpSchema, SignInSchema, SignInUser, SignUpUser };
