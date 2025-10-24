import { useEffect, useState } from "react";
import { getAuthHeaders } from "../utils/auth";

export default function UseConversation() {
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConversationsData = async () => {
            try {
                const res = await fetch(
                    `http://localhost:3000/api/conversations`,
                    {
                        headers: {
                            ...getAuthHeaders(),
                        },
                    },
                );

                if (!res.ok) {
                    throw new Error(`HTTP error: Status ${res.status}`);
                }
                let conversationsData = await res.json();
                setConversations(conversationsData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setConversations([]);
            } finally {
                setLoading(false);
            }
        };
        fetchConversationsData();
    }, []);
    
    return { conversations, loading, error };
}
