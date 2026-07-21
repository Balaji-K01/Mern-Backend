import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });

  const handlechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.username === "" ||
      userData.useremail === "" ||
      userData.userpassword === ""
    ) {
      alert("Fill the form");
      return;
    }

    const myData = JSON.parse(localStorage.getItem("datauser")) || [];

    const checkMail = myData.find((e) => e.useremail === userData.useremail);

    if (checkMail) {
      alert("This is alerady registered");
      return;
    }
    myData.push(userData);

    localStorage.setItem("datauser", JSON.stringify(myData));
    alert("sucessfully added");

    setUserData({ username: "", useremail: "", userpassword: "" });
    navigate("/login");
  };
  const handlelogIn = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handlechange}
            type="text"
            value={userData.username}
            name="username"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="useremail"
            placeholder="Enter Your Email"
            value={userData.useremail}
            onChange={handlechange}
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="userpassword"
            placeholder="Enter Your Password"
            value={userData.userpassword}
            onChange={handlechange}
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="submit"
            value="Register"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 cursor-pointer transition-colors"
          />
        </form>
        <br />
        <h1 className="text-center">
          Existing User ?{" "}
          <button className="text-red-500" onClick={handlelogIn}>
            Login
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Register;
