import { Routes, Route, Navigate } from "react-router-dom";
import LoginContainer from "./components/containers/LoginContainer";
import Register from "./components/Register/Register";
import Conversations from "./components/Conversations/Conversations";
import ConvoMessages from "./components/ConvoMessages/ConvoMessages";
import Users from "./components/Users/Users";
import UserById from "./components/Users/UserById";

import ProtectedRoute from "./components/containers/ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />
            <Route path="login" element={<LoginContainer />} />
            <Route path="register" element={<Register />} />

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
            <Route
                path="users"
                element={
                    <ProtectedRoute>
                        <Users />
                    </ProtectedRoute>
                }
            />

            <Route
                path="users/:id"
                element={
                    <ProtectedRoute>
                        <UserById />
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
