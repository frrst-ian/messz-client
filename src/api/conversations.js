import { getAuthHeaders } from "../utils/auth";

const API_URL = "http://localhost:3000/api";

const getConversations = async () => {
    const res = await fetch(`${API_URL}/conversations`, {
        method: "GET",
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch conversations");
    }

    return res.json();
};

export { getConversations };
