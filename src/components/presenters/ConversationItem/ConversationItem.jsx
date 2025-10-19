import styles from "./ConversationItem.module.css";

const ConversationItem = ({ conversation, onConversationClick }) => {
    /* what i need:
         - pfp
    */

    return (
        <div
            onClick={onConversationClick}
            className={styles.conversationItemContainer}
        >
            <div className="left">
                <p className={styles.name}>
                    {conversation.participant.fullName}
                </p>
                {conversation.messages.map((message) => (
                    <span className={styles.lastMessage} key={message.id}>
                        {message.content}
                    </span>
                ))}
            </div>
            <div className="right">
                <p className={styles.seen}>
                    Seen status: {conversation.seen ? "true" : "false"}
                </p>
                <p className={styles.unread}>
                    Unread messages: {conversation.unseenMessages}
                </p>
            </div>
        </div>
    );
};

export default ConversationItem;
