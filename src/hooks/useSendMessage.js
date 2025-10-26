import { getAuthHeaders } from "../utils/auth";
import { useState } from "react";

export default function useMessage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendMessage = async (content, convoId) => {
        setLoading(true);
        console.log("convoId:", convoId);
        try {
            const res = await fetch(`http://localhost:3000/api/message`, {
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
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, error };
}
