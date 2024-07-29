import { z } from "zod";
import { isRequired, minChars } from "../utils";

export const USERS_COLLECTION = "Users";
// User types and schema
const UserSchema = z.object({
    uid: z.string({ message: isRequired("Uid") }),
    email: z
        .string({ message: isRequired("Email address") })
        .email({ message: "Invalid email address" }),
    displayName: z
        .string({ message: isRequired("Display name") })
        .min(3, { message: minChars("Display Name", 3) }),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    photoURL: z.string().optional().nullable(),
});

const UpdateUserSchema = UserSchema.partial().merge(
    z.object({
        uid: z.string({ message: isRequired("Uid") }),
    }),
);

type User = z.infer<typeof UserSchema>;
type UpdateUser = z.infer<typeof UpdateUserSchema>;

export { UserSchema, UpdateUserSchema };
export type { User, UpdateUser };
