const ConversationListContainer = ({ conversations, loading, error }) => {
    /* what i need:
         - pfp
         - name(sender)
         - lastMessage
         - seenStatus
         - unseen messages
    */

    return (
        <div className="conversationListContainer">
            {loading && <div>Loading...</div>}
            {error && <span>{error}</span>}
            <ul>
                {conversations.map((convo) => (
                    <li key={convo.id}>
                        <p>Sender: {convo.participant.fullName}</p>
                        last message:
                        {convo.messages.map((message) => (
                            <span key={message.id}>{message.content}</span>
                        ))}
                        <p>Seen status: {convo.seen ? "true" : "false"}</p>
                        <p>Unread messages: {convo.unseenMessages}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConversationListContainer;
