// import { createConversation } from "../../api/conversations";
// import ProfileItem from "../presenters/ProfileItem/ProfileItem";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const ProfileItemContainer = ({ profile }) => {
//     const navigate = useNavigate();
//     const [error, setError] = useState("");

//     const handleProfileClick = () => {
//         navigate(`${profile.id}`);
//     };

//     const handleMessageClick = () => {
//         const participantId = profile.userId;
//         createConversation(participantId)
//             .then((conversation) => {
//                 console.log("convo:", conversation);
//                 navigate(`/conversations/${conversation.id}`, {
//                     state: {
//                         name: profile.user.fullName,
//                     },
//                 });
//             })
//             .catch((error) => {
//                 console.error("error: ", error);
//                 setError(error);
//             });
//     };

//     return (
//         <ProfileItem
//             onProfileClick={handleProfileClick}
//             profile={profile}
//             onMessageClick={handleMessageClick}
//             error={error}
//         />
//     );
// };

// export default ProfileItemContainer;
