import { Routes, Route, Navigate } from "react-router-dom";
import LoginContainer from "./components/containers/LoginContainer";
import RegisterContainer from "./components/containers/RegisterContainer";
import ConversationsContainer from "./components/containers/ConversationsContainer";
import ConversationMessagesContainer from "./components/containers/ConversationMessagesContainer";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />
            <Route path="login" element={<LoginContainer />} />
            <Route path="register" element={<RegisterContainer />} />
            <Route path="conversations" element={<ConversationsContainer />} />
            <Route path="conversations/:id" element={<ConversationMessagesContainer />} />

        </Routes>
    );
};

export default AppRoutes;
