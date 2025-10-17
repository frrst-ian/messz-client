import { getAuthHeaders } from "../utils/auth";

const API_URL = "http://localhost:3000/api";
const authLogin = async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const error = await res.json();
        console.log("Error loggin in: ", error);
        throw new Error(`HTTP error: Status ${res.status}`);
    }
    // console.log("Response from logging in: ", res.json());
    return res.json();
};

export { authLogin };
