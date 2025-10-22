import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRegister } from "../../api/auth";
import { UserContext } from "../../context/UserContext";
import Register from "../presenters/Register/Register";

const RegisterContainer = () => {
    const { login } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        if (password === confirmPassword) {
            authRegister(name, email, password, confirmPassword)
                .then((data) => {
                    login(data.token, data.user);
                    navigate("/create-profile");
                })
                .catch((err) => {
                    if (err.details && Array.isArray(err.details)) {
                        setError(err.details.join('\n'));
                    } else {
                        setError(err.message);
                    }
                })
                .finally(() => {
                    setSubmitting(false);
                });
        } else {
            setError("Password doesn't match");
            setSubmitting(false);
        }
    };

    return (
        <Register
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            error={error}
            submitting={submitting}
            onSubmit={handleSubmit}
        />
    );
};

export default RegisterContainer;
