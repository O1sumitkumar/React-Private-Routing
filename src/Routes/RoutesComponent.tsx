import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const RoutesComponent: FC = () => {
  const isAuthenticated = true; // This would typically come from your auth state
  const isVerified = true; // This would typically come from your user state
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <ProtectedRoute
        path="/dashboard"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerified={isVerified}
        verificationPath="/login"
      />
    </Routes>
  );
};

export default RoutesComponent;
