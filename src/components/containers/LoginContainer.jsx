import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../api/auth";
import { UserContext } from "../../context/UserContext";
import Login from "../presenters/Login/Login";

const LogInContainer = () => {
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        authLogin(email, password)
            .then((data) => {
                console.log("Email & Pass:", data.token, " ", data.user);
                login(data.token, data.user);
                navigate("/conversations");
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            submitting={submitting}
            error={error}
            onSubmit={handleSubmit}
        />
    );
};

export default LogInContainer;
