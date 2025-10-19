import styles from "./Message.module.css";
import Button from "../Button/Button";

const Message = ({ content, setContent, onSubmit, submitting, error }) => {
    return (
        <div className="">
            <form onSubmit={onSubmit}>
                {error && <span className={styles.error}>{error}</span>}

                <input
                    type="text"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Message"
                    required
                />

                <Button
                    type="primary"
                    label={submitting ? "Sending..." : "Send"}
                    status={submitting}
                ></Button>
            </form>
        </div>
    );
};

export default Message;
