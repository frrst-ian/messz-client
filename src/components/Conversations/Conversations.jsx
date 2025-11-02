import { useNavigate } from "react-router-dom";
import useConversations from "../../hooks/useConversations";
import styles from "./Conversations.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

export default function Conversations() {
    const { conversations, loading, error } = useConversations();

    const { user } = useContext(UserContext);

    const userId = user.id;

    const navigate = useNavigate();
    if (loading) return <div className="loading">Loading...</div>;

    const navToUsers = () => {
        navigate("/users");
    };

    return (
        <>
            <Nav></Nav>
            {conversations.length !== 0 ? (
                <div className={styles.convoWrapper}>
                    {conversations.map((convo) => (
                        <div
                            className={styles.convoItemWrapper}
                            key={convo.id}
                            onClick={() =>
                                navigate(`/conversations/${convo.id}`)
                            }
                        >
                            {convo.participants.map((p) => (
                                <div key={p.id}>
                                    <img
                                        className={styles.pfp}
                                        key={p.id}
                                        src={p.user?.pfpUrl}
                                    />
                                </div>
                            ))}

                            <div className={styles.userInfo}>
                                {convo.participants.map((p) => (
                                    <p key={p.id} className={styles.sender}>
                                        {p.user?.fullName}
                                    </p>
                                ))}

                                {userId === convo.messages[0]?.senderId ? (
                                    <span className={styles.content}>
                                        {" "}
                                        You: {convo.messages[0]?.content}{" "}
                                    </span>
                                ) : (
                                    convo.messages[0]?.content
                                )}
                            </div>
                        </div>
                    ))}
                    {error && <div> {error} </div>}
                </div>
            ) : (
                <div className={styles.convoWrapper}>
                    <p>No chats.</p>
                    <Button
                        type="secondary"
                        label="Find friends"
                        task={navToUsers}
                    />
                    {error && <div> {error} </div>}
                </div>
            )}
        </>
    );
}
