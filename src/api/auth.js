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
        const errorData = await res.json();
        console.log("Error logging in: ", errorData);
        throw new Error(errorData.error || "Login Failed");
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
        if (errorData.errors) error.details = errorData.errors;

        throw error;
    }

    return res.json();
};

export { authLogin, authRegister };
