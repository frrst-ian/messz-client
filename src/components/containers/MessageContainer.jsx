// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { createMessage } from "../../api/conversations";
// import Message from "../presenters/Message/Message";

// const MessageContainer = () => {
//     const [content, setContent] = useState("");
//     const [submitting, setSubmitting] = useState(false);
//     const [error, setError] = useState("");

//     const { id } = useParams();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitting(true);
//         setError("");

//         createMessage(id, content)
//             .then((data) => {
//                 if (data) setContent(data);
//             })
//             .catch((err) => {
//                 console.log("error: ", err);
//                 setError(err.message);
//             })
//             .finally(() => {
//                 setSubmitting(false);
//                 setContent("");
//             });
//     };

//     return (
//         <Message
//             content={content}
//             setContent={setContent}
//             submitting={submitting}
//             error={error}
//             onSubmit={handleSubmit}
//         />
//     );
// };

// export default MessageContainer;
