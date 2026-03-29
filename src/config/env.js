import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    BASE_URL: process.env.BASE_URL,
    AUTH: {
        username: process.env.AUTH_USERNAME,
        password: process.env.AUTH_PASSWORD
    },
    TIMEOUT: Number(process.env.TIMEOUT) || 3500
};