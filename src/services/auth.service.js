import { api } from "../client/apiClient.js";

export const AuthService = {
    createAuth: (username, password) => api.post("/auth", { username, password }),
};