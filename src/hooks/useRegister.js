import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UseRegister() {
    const { login } = useContext(UserContext);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const createUser = async (formData) => {
        try {
            setSubmitting(true);
            const res = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const errorResponse = await res.json();
                throw errorResponse.errors;
            }

            const userData = await res.json();
            login(userData.token, userData.user);
            navigate("/conversations");
            return userData;
        } catch (err) {
            setError(err);
        } finally {
            setError(null);
        }
    };

    return { createUser, error, submitting };
}
