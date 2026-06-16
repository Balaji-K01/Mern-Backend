import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate();
    const handleclick=()=>{
        navigate("/login")
    }
  return (
    <>
      <div className="bg-blue-950 text-white p-5 flex justify-between items-center">
        <div className="mx-10">Logo</div>
        <div className="mx-10 flex gap-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          {/*  <Link to={"/contact"}>Contact</Link> */}
          <NavLink
            className={({ isActive }) =>
              isActive &&
              "bg-white text-black w-25 flex items-center justify-center mb-2 rounded text-center "
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <Link to={"/services"}>Services</Link>
          <button className="bg-white p-2 w-25 text-black rounded" onClick={handleclick}>
            Login
          </button >
        </div>
      </div>
    </>
  );
};

export default Navbar;
