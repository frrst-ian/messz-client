import styles from "./Login.module.css";
import Button from "../Button/Button";

const Login = ({
    email,
    setEmail,
    password,
    setPassword,
    submitting,
    error,
    onSubmit,
}) => {
    return (
        <>
            <div className={styles.loginContainer}>
                <form onSubmit={onSubmit}>
                    <h1>Log in to Messz</h1>
                    {error && <span className={styles.error}>{error}</span>}

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

                    <Button
                        type="primary"
                        label={submitting ? "Logging in..." : "Login"}
                        status={submitting}
                    ></Button>

                    <a
                        className={styles.btn}
                        rel="noopener noreferrer"
                        href="/register"
                    >
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

export default Login;
