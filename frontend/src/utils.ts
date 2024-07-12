export const isRequired = (field: string) => `${field} is required.`;
export const minChars = (field: string, char: number) =>
    `${field} must have at least ${char} characters`;

type AnyObject = { [key: string]: any };

/* Changes object null and undefined properties to empty string, used in formik */
export const formatObj = (obj: AnyObject): AnyObject => {
    const newObj: AnyObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            newObj[key] = value === null || value === undefined ? "" : value;
        }
    }
    return newObj;
};
