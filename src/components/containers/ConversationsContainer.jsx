import { useState, useEffect } from "react";
import { getConversations } from "../../api/conversations";
import ConversationListContainer from "./ConversationListContainer";

const ConversationContainer = () => {
    const [conversations, setConverrsations] = useState([]);
    // const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getConversations()
            .then((data) => {
                if (data) {
                    console.log("Conversations: ", data);
                    setConverrsations(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log("Catched err: ", err);
                setError(err.message);
                setLoading(false);
            })
            .finally(() => {
                setError("");
                setLoading(false);
            });
    }, []);

    console.log("Conversations: ", conversations);

    return (
        <ConversationListContainer
            conversations={conversations}
            loading={loading}
            error={error}
        />
        // <ConversationContainer /> // this shit is a unique conversation
        // <ProfileContainer/>
    );
};

export default ConversationContainer;
