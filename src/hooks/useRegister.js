import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
                body: formData,
            });

            if (!res.ok) {
                const errorResponse = await res.json();
                // console.log( errorResponse.errors)
                throw errorResponse.errors;
            }

            const userData = await res.json();
            login(userData.token, userData.user);
            navigate("/conversations");
            return userData;
        } catch (err) {
            setError(err);
        } finally {
            setSubmitting(false);
        }
    };

    return { createUser, error, submitting };
}
