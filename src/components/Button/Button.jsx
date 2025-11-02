import styles from "./Button.module.css";

const Button = ({ type, label, status, task }) => {
    return (
        <button disabled={status} className={styles[type]} onClick={task} >
            {label}
        </button>
    );
};

export default Button;
