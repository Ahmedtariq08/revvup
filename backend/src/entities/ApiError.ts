import { ZodError } from "zod";

const STATUS_CODES = {
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400,
};

/**
 * @purpose Handles default errors in routes
 * @param defaultMessage Error message that needs to be displayed for cases not handled
 */
export const handleError = (
    error: any,
    defaultMessage: string,
): { status: number; message: string } => {
    // Codes can be added to handle differently
    if (error.code && error.code.startsWith("auth/")) {
        return { status: STATUS_CODES.BAD_REQUEST, message: error.message };
    } else if (error instanceof ZodError) {
        const firstError = error.errors[0];
        return { status: STATUS_CODES.BAD_REQUEST, message: firstError.message };
    }
    return { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: defaultMessage };
};

/**
 * @param body request body received
 * @param schema Zod schema
 * @returns Error if fails, data object if success
 */
export const parseSchema = (
    body: unknown,
    schema: Zod.AnyZodObject,
): { isSuccess: boolean; error?: string; data?: unknown } => {
    const validation = schema.safeParse(body);
    if (!validation.success) {
        const firstError = validation.error.errors[0];
        return { isSuccess: false, error: firstError.message };
    }
    return { isSuccess: true, data: validation.data };
};
