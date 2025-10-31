import { useNavigate } from "react-router-dom";
import useConversations from "../../hooks/useConversations";
import styles from "./Conversations.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Nav from "../Nav/Nav";

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
            <Nav></Nav>
            <div className={styles.convoWrapper}>
                {conversations.map((convo) => (
                    <div
                        className={styles.convoItemWrapper}
                        key={convo.id}
                        onClick={() => navigate(`/conversations/${convo.id}`)}
                    >
                        {convo.participants.map((p) => (
                            <div key={p.id}>
                                <img className={styles.pfp} key={p.id} src={p.user?.pfpUrl} />
                            </div>
                        ))}

                        <div className={styles.userInfo}>
                            {convo.participants.map((p) => (
                                <p key={p.id} className={styles.sender} >{p.user?.fullName}</p>
                            ))}

                            {userId === convo.messages[0]?.senderId ? (
                                <span className={styles.content} > You: {convo.messages[0]?.content} </span>
                            ) : (
                                convo.messages[0]?.content
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
