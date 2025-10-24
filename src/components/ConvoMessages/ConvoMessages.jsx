import styles from "./ConvoMessages.module.css";
import useConvoMessages from "../../hooks/useConvoMessages";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
// import styles from "./Conversations.module.css";

export default function Conversations() {
    const { convoMessages, loading, error } = useConvoMessages();

    const { user } = useContext(UserContext);

    const userId = user.id;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (convoMessages.length === 0) return <div>No conversations found</div>;

    const messages = convoMessages.messages;
    const participants = convoMessages.participants;

    return (
        <>
            <div>
                {participants.map((p) => (
                    <p key={p.id}>{p.user?.fullName} </p>
                ))}
            </div>
            <div>
                {messages.map((m) => (
                    <p
                        key={m.id}
                        className={
                            m.senderId === userId ? styles.right : styles.left
                        }
                    >
                        {m.content}
                    </p>
                ))}
            </div>
        </>
    );
}
