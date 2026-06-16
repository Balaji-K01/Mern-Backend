import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Layout from "../components/Layout";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
