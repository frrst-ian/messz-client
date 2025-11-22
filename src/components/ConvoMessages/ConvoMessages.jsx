import styles from "./ConvoMessages.module.css";
import useConvoMessages from "../../hooks/useConvoMessages";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Message from "../Message/Message";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

export default function Conversations() {
    const { convoMessages, loading, error } = useConvoMessages();

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const userId = user.id;

    if (loading) return <div className="loading">Loading messages...</div>;
    if (error) return <div>{error}</div>;
    if (convoMessages.length === 0) return <div>No conversations found</div>;

    const messages = convoMessages.messages;
    const participants = convoMessages.participants;
    const convoId = convoMessages.id;

    return (
        <>
            <Nav></Nav>
            <div className={styles.messagesContent}>
                <div className={styles.messagesWrapper}>
                    {participants.map((p) => (
                        <div
                            key={p.id}
                            className={styles.sender}
                            onClick={() => navigate(`/users/${p.user.id}`)}
                        >
                            <img className={styles.pfp} src={p.user?.pfpUrl} />
                            <p key={p.id}>{p.user?.fullName} </p>
                        </div>
                    ))}
                    <div className={styles.messagesInfo}>
                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={
                                    m.senderId === userId
                                        ? styles.right
                                        : styles.left
                                }
                            >
                                {m.content}
                            </div>
                        ))}
                    </div>
                    <Message convoId={convoId} />
                </div>
            </div>
        </>
    );
}
