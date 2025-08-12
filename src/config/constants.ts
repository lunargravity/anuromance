export const IS_PROD = process.env.NODE_ENV === "production";
export const BASE_PATH = IS_PROD ? "/anuromance" : "";