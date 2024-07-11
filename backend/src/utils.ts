export const isRequired = (field: string) => `${field} is required.`;
export const minChars = (field: string, char: number) =>
    `${field} must have at least ${char} characters`;

export const splitDisplayName = (
    displayName: string | undefined,
): { firstName: string; lastName: string } => {
    const arr = displayName?.split(" ") ?? [];
    return { firstName: arr[0] ?? "", lastName: arr[1] ?? "" };
};

export const convertToDisplayName = (firstName: string, lastName: string): string => {
    return `${firstName ?? ""} ${lastName ?? ""}`;
};
