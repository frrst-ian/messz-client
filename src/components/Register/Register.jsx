import { useState } from "react";
import Button from "../Button/Button";
import useRegister from "../../hooks/useRegister";
import styles from "./register.module.css"

const Register = () => {
    const { createUser, submitting, error } = useRegister();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [file, setSelectedFile] = useState(null);
    const [bio, setBio] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("pfpUrl", file);
        formData.append("bio", bio);

        createUser(formData);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <>
            <div className={styles.registerContainer}>
                <form onSubmit={handleSubmit}>
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
                    <input type="file" onChange={handleFileChange} required />
                    {file && (
                        <div>
                            <p>
                                Selected: {file.name} (
                                {(file.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                        </div>
                    )}
                    <input
                        type="text"
                        name="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Bio"
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
