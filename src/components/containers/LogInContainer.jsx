import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../api/api";
import { UserContext } from "../../context/UserContext";

const LogInContainer = () => {
    const { login, logout } = useContext(UserContext);
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
                console.log("Catched error: ", err);
                setError(err.error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <>
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {error && <span className="error">{error}</span>}

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

                    <button className="btn --btn-login" disabled={submitting}>
                        {submitting ? "Logging in..." : "Login"}
                    </button>

                    <a className="btn" rel="noopener noreferrer" href="/register">
                        Don't have an account? Register 
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

export default LogInContainer;
