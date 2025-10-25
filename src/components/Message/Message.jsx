import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
export default function Message({ convoId }) {
    const [content, setContent] = useState("");
    const { sendMessage, loading, error } = useSendMessage();

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        sendMessage(content, convoId);
        setContent("");
    };

    if (error) return <div>{error}</div>;

    return (
        <form onSubmit={handleSendMessage}>
            <input
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Message"
                type="text"
            />
            <button disabled={loading}>Send</button>
        </form>
    );
}
