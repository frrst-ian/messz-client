import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRegister } from "../../api/api";
import { UserContext } from "../../context/UserContext";

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
                    navigate("/conversations");
                })
                .catch((err) => {
                    if (err.details && Array.isArray(err.details)) {
                        setError(err.details.join("\n"));
                    } else {
                        setError(err.error);
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
        <>
            <div className="registerContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an account</h1>
                    {error && <span className="error">{error}</span>}

                    <input
                        type="Full name"
                        title="Full name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        placeholder="Full name"
                        required
                    />

                    <input
                        type="email"
                        title="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        type="password"
                        title="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        placeholder="Password"
                        required
                    />

                    <input
                        type="password"
                        title="Confirm password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="current-password"
                        placeholder="Confirm password"
                        required
                    />

                    <button
                        className="btn --btn-register"
                        disabled={submitting}
                    >
                        {submitting ? "Submitting..." : "Register"}
                    </button>

                    <a className="btn" rel="noopener noreferrer" href="/login">
                        I already have an account
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            fill="none"
                            viewBox="0 0 16 16"
                            className="icon page_arrowRight__4KrB_"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"
                            ></path>
                        </svg>
                    </a>
                </form>
            </div>
        </>
    );
};

export default RegisterContainer;
