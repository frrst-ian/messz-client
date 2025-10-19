import { useState, useEffect } from "react";
import { getConversations } from "../../api/conversations";
import ConversationList from "../presenters/ConversationList/ConversationList";

const ConversationsContainer = () => {
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getConversations()
            .then((data) => {
                if (data) {
                    setConversations(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log("Catched err: ", err);
                setError(err.message);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    console.log("conversations", conversations);

    return (
        <ConversationList
            conversations={conversations}
            loading={loading}
            error={error}
        />
    );
};

export default ConversationsContainer;
