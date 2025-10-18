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
    return res.json();
};

const authRegister = async (name, email, password, confirmPassword) => {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.log("errorData: ", errorData);
        const error = new Error(errorData.error || "Registration Failed");
        if (errorData.details) {
            error.details = errorData.details;
        }

        throw error;
    }

    return res.json();
};

export { authLogin, authRegister };
