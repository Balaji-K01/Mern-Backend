import { Routes,Route } from "react-router-dom";
import Login from "../assets/component/Login";
import Otp from "../assets/component/Otp";
import Home from "../assets/component/Home";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
