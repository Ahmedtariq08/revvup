// Types
interface SuccessApiResponse<T> {
    data: T;
    error: null;
    isSuccess: true;
}

interface ErrorApiResponse<T> {
    data: null;
    error: { statusCode: number; message: string };
    isSuccess: false;
}

export type ApiResponse<T> = SuccessApiResponse<T> | ErrorApiResponse<T>;
