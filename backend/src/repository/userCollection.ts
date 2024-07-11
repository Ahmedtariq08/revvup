import { z } from "zod";
import { isRequired } from "../utils";

const CreateUserSchema = z.object({
    email: z
        .string({ message: isRequired("Email address") })
        .email({ message: "Invalid email address" }),
    displayName: z
        .string({ message: isRequired("Display name") })
        .min(3, { message: "Display name must be at least 3 characters long" }),
    password: z
        .string({ message: isRequired("Password") })
        .min(8, { message: "Password must be at least 8 characters long" }),
});

const UserSchema = z.object({
    uid: z.string({ message: isRequired("Uid") }),
    email: z.string().email({ message: "Invalid email address" }).optional(),
    displayName: z.string().min(3, { message: "Display name is required" }).optional(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .optional(),
});

export const UserResponseSchema = UserSchema.pick({
    uid: true,
    email: true,
    displayName: true,
});

type UserResponse = z.infer<typeof UserResponseSchema>;
type CreateUser = z.infer<typeof CreateUserSchema>;
type User = z.infer<typeof UserSchema>;

export { CreateUserSchema, UserSchema, User, CreateUser, UserResponse };
