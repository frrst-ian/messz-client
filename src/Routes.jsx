import { Routes, Route, Navigate } from "react-router-dom";
import LogInContainer from "./components/containers/LogInContainer";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />
            <Route path="login" element={<LogInContainer />} />
        </Routes>
    );
};

export default AppRoutes;
