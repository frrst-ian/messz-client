import { useNavigate } from "react-router-dom";
import useConversations from "../../hooks/useConversations";
import styles from "./Conversations.module.css"

export default function Conversations() {
    const { conversations, loading, error } = useConversations();

    const navigate = useNavigate();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (conversations.length === 0) return <div>No conversations found</div>;

    // [
    //     {
    //         id: "e22b100b-6a38-4517-8893-ef167f78604d",
    //         createdAt: "2025-10-23T12:00:22.823Z",
    //         messages: [
    //             {
    //                 id: "861c2fe2-7b89-4173-b186-48caa46cf6b2",
    //                 conversationId: "e22b100b-6a38-4517-8893-ef167f78604d",
    //                 senderId: "ea1caba4-17c6-4afb-a28c-951a171cdac2",
    //                 content: "Hi",
    //                 sentAt: "2025-10-23T12:12:17.300Z",
    //                 seen: false,
    //             },
    //         ],
    //         _count: {
    //             messages: 1,
    //         },
    //     },
    // ];

    return (
        <>
            {conversations.map((convo) => (
                <div className={styles.convoItemWrapper}
                    key={convo.id}
                    onClick={() => navigate(`/conversations/${convo.id}`)}
                >
                    {convo.messages[0]?.sender?.fullName}
                    {convo.messages[0]?.content}
                </div>
            ))}
        </>
    );
}
