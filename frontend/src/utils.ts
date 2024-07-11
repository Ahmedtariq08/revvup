export const isRequired = (field: string) => `${field} is required.`;
export const minChars = (field: string, char: number) =>
    `${field} must have at least ${char} characters`;
