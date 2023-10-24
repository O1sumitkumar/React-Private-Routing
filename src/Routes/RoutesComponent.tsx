import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const RoutesComponent: FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesComponent;
