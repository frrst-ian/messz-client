import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const { login } = useContext(UserContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const loginUser = async (email, password) => {
        try {
            setSubmitting(true);

            const res = await fetch(`http://localhost:3000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || "Login failed");
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

    return { loginUser, error ,submitting};
}
