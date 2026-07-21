import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/saved", label: "Saved" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md w-full relative">
      <h1 className="text-xl font-bold">News</h1>

      <div className="hidden md:flex items-center gap-20">
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
        <Link to={"/register"}>
          <input
            type="submit"
            value="Login"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md cursor-pointer transition-colors duration-200"
          />
        </Link>
      </div>

      <button
        className="md:hidden text-xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-10">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to={"/register"}>
            <input
              type="submit"
              value="Login"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md cursor-pointer transition-colors duration-200"
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;