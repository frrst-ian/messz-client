import { useEffect, useState } from "react";
import { getAuthHeaders } from "../utils/auth";
import { useParams } from "react-router-dom";

export default function useConvoMessages() {
    const [convoMessages, setConvoMessages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchConvoMessagesData = async () => {
            try {
                const res = await fetch(
                    `http://localhost:3000/api/conversations/${id}`,
                    {
                        headers: {
                            ...getAuthHeaders(),
                        },
                    },
                );

                if (!res.ok) {
                    throw new Error(`HTTP error: Status ${res.status}`);
                }
                let convoMessagesData = await res.json();
                setConvoMessages(convoMessagesData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setConvoMessages([]);
            } finally {
                setLoading(false);
            }
        };
        fetchConvoMessagesData();
    }, [id]);

    return { convoMessages, loading, error };
}
