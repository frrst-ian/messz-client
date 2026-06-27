import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const API_URL = import.meta.env.VITE_API_URL;

export default function UseRegister() {
    const { login } = useContext(UserContext);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const createUser = async (formData) => {
        try {
            setSubmitting(true);
            const res = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            console.log("Response:", data); // add this
            if (!res.ok) {
                setError(data.errors);
                return;
            }
            login(data.token, data.user);
            navigate("/conversations");
        } catch (err) {
            console.error(err);
            setError(["Something went wrong"]);
        } finally {
            setSubmitting(false);
        }
    };

    return { createUser, error, submitting };
}
