import {  Routes, Route } from "react-router-dom";
import Login from "../component/Login";
import OtpVerify from "../component/OtpVerify";
 

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
      </Routes>
  );
};

export default AppRoutes;