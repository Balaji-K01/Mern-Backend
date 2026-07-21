import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Saved from "../pages/Saved";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../pages/Register.jsx";
import Login from "../pages/LogIn.jsx";



const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/saved" element={<Saved />} />
       
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
