import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import styles from "./Message.module.css";
import { SendHorizontal } from "lucide-react";

export default function Message({ convoId }) {
    const [content, setContent] = useState("");
    const { sendMessage, loading, error } = useSendMessage();

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        sendMessage(content, convoId);
        setContent("");
        window.location.reload()
    };

    if (error) return <div>{error}</div>;

    return (
        <form className={styles.form} onSubmit={handleSendMessage}>
            <input
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Message"
                type="text"
                className={styles.messageInput}
            />
            <button className={styles.sendBtn} disabled={loading}>
                <SendHorizontal color="#fefefe" fill="#fefefe" />
            </button>
        </form>
    );
}
