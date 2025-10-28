import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getAuthHeaders } from "../utils/auth";

export default function UseRegister() {
    const { login } = useContext(UserContext);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const createUser = async (formData) => {
        setSubmitting(true);

        try {
            const res = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                headers: {
                    ...getAuthHeaders(),
                },
                body: formData,
            });

            if (!res.ok) {
                throw new Error(`HTTP error: Status ${res.status}`);
            }

            const userData = await res.json();
            login(userData.token, userData.user);
            navigate("/conversations");
            return userData;
        } catch (err) {
            if (err.details && Array.isArray(err.details)) {
                setError(err.details.join("\n"));
            } else {
                setError(err.message);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return { createUser, error, submitting };
}
