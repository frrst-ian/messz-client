const ConversationMessages = ({ name, conversationData, error, loading }) => {
    /* 
 i need :
 - pfp
 - sender name 
 - messages
 - seen status
 - a message input

*/
    return (
        <div className="conversationMessagesContainer">
            {loading && <div>Loading...</div>}
            {error && <span className="error">{error}</span>}
            <div className="conversationInfo">
                <p>Sender Name: {name}</p>
            </div>
            <div className="conversationData">
                {conversationData?.messages?.map((msg) => (
                    <div key={msg.id}>message: {msg.content}</div>
                ))}
            </div>
        </div>
    );
};

export default ConversationMessages;
