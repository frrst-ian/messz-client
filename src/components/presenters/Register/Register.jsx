import styles from "./Register.module.css";
import Button from "../Button/Button";

const Register = ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    submitting,
    onSubmit,
}) => {
    return (
        <>
            <div className={styles.registerContainer}>
                <form onSubmit={onSubmit}>
                    <h1>Create an account</h1>
                    {error && (
                        <div className={styles.error}>
                            <pre>{error}</pre>
                        </div>
                    )}

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

                    <Button
                        type="primary"
                        label={submitting ? "Submitting..." : "Register"}
                        status={submitting}
                    ></Button>

                    <a
                        className={styles.btn}
                        rel="noopener noreferrer"
                        href="/login"
                    >
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

export default Register;
