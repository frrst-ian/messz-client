// import styles from "./ConversationMessages.module.css";
// import MessageContainer from "../../containers/MessageContainer.jsx";
// const ConversationMessages = ({ name, conversationData, error, loading }) => {
//     return (
//         <div className="conversationMessagesContainer">
//             {loading && <div>Loading...</div>}
//             {error && <span className="error">{error}</span>}
//             <div className="conversationInfo">
//                 <p>Sender Name: {name}</p>
//             </div>
//             <div className={styles.conversationContentContainer}>
//                 {conversationData?.messages?.map((msg) => (
//                     <div
//                         key={msg.id}
//                         className={
//                             msg.senderId === conversationData.userId
//                                 ? styles.messageLeft
//                                 : styles.messageRight
//                         }
//                     >
//                         <p> {msg.content}</p>
//                     </div>
//                 ))}
//             </div>
//             <MessageContainer />
//         </div>
//     );
// };

// export default ConversationMessages;
