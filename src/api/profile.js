import { getAuthHeaders } from "../utils/auth";

const API_URL = "http://localhost:3000/api";

const createProfile = async (formData) => {
    const res = await fetch(`${API_URL}/profile`, {
        method: "POST",
        headers: {
            ...getAuthHeaders(),
        },
        body: formData,
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.log("Error sending message: ", errorData);
        throw new Error(errorData.error || "Message not sent");
    }
    return res.json();
};

export { createProfile };
