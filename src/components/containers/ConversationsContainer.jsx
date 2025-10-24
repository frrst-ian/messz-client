// import { useState, useEffect } from "react";
// import ConversationList from "../presenters/ConversationList/ConversationList";
// import { getConversations } from "../../api/conversations";
// import Sidebar from "../presenters/Sidebar/Sidebar";

// const ConversationsContainer = () => {
//     const [conversations, setConversations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         getConversations()
//             .then((data) => {
//                 if (data) {
//                     setConversations(data);
//                 }
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.log("Catched err: ", err);
//                 setError(err.message);
//                 setLoading(false);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     console.log("conversations", conversations);

//     return (
//         <>
//             <Sidebar />
//             <ConversationList
//                 conversations={conversations}
//                 loading={loading}
//                 error={error}
//             />
//         </>
//     );
// };

// export default ConversationsContainer;
