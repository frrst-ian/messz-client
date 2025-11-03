import { useEffect, useState } from "react";
import { getAuthHeaders } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function useUsers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const query = `?search=${search}`;
            const res = await fetch(`http://localhost:3000/api/users${query}`, {
                headers: {
                    ...getAuthHeaders(),
                },
            });
            if (!res.ok) throw new Error(`HTTP error: Status ${res.status}`);
            const usersData = await res.json();
            setUsers(usersData);
            if (usersData.length === 0) {
                setError("User does not exist");
            } else {
                setError(null);
            }
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!search.trim()) return;
        fetchPost(search);
    };

    const handleUserClick = async (user2Id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/conversations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...getAuthHeaders(),
                },
                body: JSON.stringify({ user2Id }),
            });

            if (!res.ok) throw new Error(`HTTP Error: Status ${res.status}`);

            const convoData = await res.json();

            navigate(`/conversations/${convoData.id}`);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleSearch,
        users,
        search,
        setSearch,
        loading,
        error,
        handleUserClick,
    };
}
