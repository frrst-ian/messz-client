import { Routes, Route, Navigate } from "react-router-dom";
import LoginContainer from "./components/containers/LoginContainer";
import RegisterContainer from "./components/containers/RegisterContainer";
import Conversations from "./components/Conversations/Conversations";
import ConvoMessages from "./components/ConvoMessages/ConvoMessages";
// import ConversationsContainer from "./components/containers/ConversationsContainer";
// import ConversationMessagesContainer from "./components/containers/ConversationMessagesContainer";
// import ProfileContainer from "./components/containers/ProfileContainer";
// import ProfileListContainer from "./components/containers/ProfileListContainer";
// import ProfileDetailContainer from "./components/containers/ProfileDetailContainer";
// import UpdateProfileContainer from "./components/containers/UpdateProfileContainer";
import ProtectedRoute from "./components/containers/ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />
            <Route path="login" element={<LoginContainer />} />
            <Route path="register" element={<RegisterContainer />} />

            <Route
                path="conversations"
                element={
                    <ProtectedRoute>
                        <Conversations />
                    </ProtectedRoute>
                }
            />
            <Route
                path="conversations/:id"
                element={
                    <ProtectedRoute>
                        <ConvoMessages />
                    </ProtectedRoute>
                }
            />
            {/*            <Route
                path="/user-profiles"
                element={
                    <ProtectedRoute>
                        <ProfileListContainer />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/create-profile"
                element={
                    <ProtectedRoute>
                        <ProfileContainer />
                    </ProtectedRoute>
                }
            />
            <Route
                path="user-profiles/:id"
                element={
                    <ProtectedRoute>
                        <ProfileDetailContainer />
                    </ProtectedRoute>
                }
            />
            <Route
                path="user-profiles/:id/update"
                element={
                    <ProtectedRoute>
                        <UpdateProfileContainer />
                    </ProtectedRoute>
                }
            />*/}
        </Routes>
    );
};

export default AppRoutes;
