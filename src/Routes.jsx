import { Routes, Route, Navigate } from "react-router-dom";
import LoginContainer from "./components/containers/LoginContainer";
import RegisterContainer from "./components/containers/RegisterContainer";
import ConversationsContainer from "./components/containers/ConversationsContainer";
import ConversationMessagesContainer from "./components/containers/ConversationMessagesContainer";
import ProfileContainer from "./components/containers/ProfileContainer";
import ProfileListContainer from "./components/containers/ProfileListContainer";
import Sidebar from "./components/presenters/Sidebar/Sidebar";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />
            <Route path="login" element={<LoginContainer />} />
            <Route path="register" element={<RegisterContainer />} />
            <Route element={<Sidebar />}>
                <Route
                    path="conversations"
                    element={<ConversationsContainer />}
                />
                <Route
                    path="conversations/:id"
                    element={<ConversationMessagesContainer />}
                />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/user-profiles" element={<ProfileListContainer />} />
            </Route>
            <Route />
        </Routes>
    );
};

export default AppRoutes;
