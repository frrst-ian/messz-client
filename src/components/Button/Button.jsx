import styles from "./Button.module.css";

const Button = ({ type, label, status }) => {
    return (
        <button disabled={status} className={styles[type]}>
            {label}
        </button>
    );
};

export default Button;
