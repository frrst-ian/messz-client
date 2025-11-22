import { getAuthHeaders } from "../utils/auth";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export default function useMessage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (content, convoId) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...getAuthHeaders(),
                },
                body: JSON.stringify({ content, convoId }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error: Status ${res.status}`);
            }
            return await res.json();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, error };
}
