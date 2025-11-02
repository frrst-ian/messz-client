import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const { login } = useContext(UserContext);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        setSubmitting(true);

        try {
            const res = await fetch(`http://localhost:3000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error: Status ${res.status}`);
            }

            const userData = await res.json();
            login(userData.token, userData.user);
            navigate("/conversations");
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

    return { loginUser, error, submitting };
}
