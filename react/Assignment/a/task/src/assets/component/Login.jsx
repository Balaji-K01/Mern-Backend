import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ useremail: "", userpassword: "" });
  const [saveData, setSaveData] = useState([]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.useremail === "" || userData.userpassword === "") {
      alert("Fill the form");
      return;
    }

    const myData = JSON.parse(localStorage.getItem("datauser")) || [];
    myData.push(userData);
    localStorage.setItem("datauser", JSON.stringify(myData));

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("auth", JSON.stringify(otp));

    setUserData({ useremail: "", userpassword: "" });
    navigate("/otp");
  };

  return (
    <div className="w-full min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg  w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            onChange={handleChange}
            placeholder="enter your email id"
            name="useremail"
            value={userData.useremail}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            onChange={handleChange}
            placeholder="enter your password"
            name="userpassword"
            value={userData.userpassword}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="submit"
            value="Login"
            className="bg-blue-600 text-white py-2 rounded-md cursor-pointer hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;