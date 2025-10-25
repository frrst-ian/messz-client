import { useNavigate } from "react-router-dom";
import useConversations from "../../hooks/useConversations";
import styles from "./Conversations.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export default function Conversations() {
    const { conversations, loading, error } = useConversations();

    const { user } = useContext(UserContext);

    const userId = user.id;

    const navigate = useNavigate();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (conversations.length === 0) return <div>No conversations found</div>;

    return (
        <>
            {conversations.map((convo) => (
                <div
                    className={styles.convoItemWrapper}
                    key={convo.id}
                    onClick={() => navigate(`/conversations/${convo.id}`)}
                >
                    <div>
                        {convo.participants.map((p) => (
                            <p key={p.id}>{p.user?.fullName}</p>
                        ))}
                    </div>
                    <div>
                        {userId === convo.messages[0]?.senderId ? (
                            <p> You: {convo.messages[0]?.content} </p>
                        ) : (
                            convo.messages[0]?.content
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}
