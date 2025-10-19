import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getConversationMessages } from "../../api/conversations";
import ConversationMessages from "../presenters/ConversationMessages/ConversationMessages";

const ConversationMessagesContainer = () => {
    const [conversationData, setConversationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { id } = useParams();
    const { state } = useLocation();
    const { name, participantId } = state || {};

    // console.log("name:", name);
    // console.log("participantId:", participantId);

    useEffect(() => {
        getConversationMessages(id, participantId)
            .then((data) => {
                if (data) setConversationData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id, participantId]);

    console.log("convoData: ", conversationData);

    return (
        <ConversationMessages
            name={name}
            conversationData={conversationData}
            loading={loading}
            error={error}
        />
    );
};

export default ConversationMessagesContainer;
