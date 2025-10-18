import { Routes, Route, Navigate } from "react-router-dom";
import LogInContainer from "./components/containers/LogInContainer";
import RegisterContainer from "./components/containers/RegisterContainer";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="login" replace />} />
            <Route path="login" element={<LogInContainer />} />
            <Route path="register" element={<RegisterContainer />} />
        </Routes>
    );
};

export default AppRoutes;
