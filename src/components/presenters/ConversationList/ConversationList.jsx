import styles from "./ConversationList.module.css";
import ConversationItemContainer from "../../containers/ConversationItemContainer";
import ProfileItem from "../ProfileItem/ProfileItem";

const ConversationList = ({ conversations, loading, error }) => {
    if (conversations.length === 0) {
        return <p> No conversations. </p>;
    }

    return (
        <div className={styles.conversationListContainer}>
            {loading && <div>Loading...</div>}
            {error && <span className={styles.error}>{error}</span>}
            {conversations.map((conversation) => (
                <ConversationItemContainer
                    key={conversation.id}
                    conversation={conversation}
                />
            ))}
        </div>
    );
};

export default ConversationList;
