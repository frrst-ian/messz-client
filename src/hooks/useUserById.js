import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthHeaders } from "../utils/auth";

const API_URL = import.meta.env.VITE_API_URL

export default function useUserById() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/users/${id}`,
                    {
                        headers: {
                            ...getAuthHeaders(),
                        },
                    },
                );

                if (!res.ok)
                    throw new Error(`HTTP Error :  Status ${res.status}`);
                const userData = await res.json();
                setUser(userData);
                setError(null);
            } catch (err) {
                setError(err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [id]);

    return { user, loading, error };
}
