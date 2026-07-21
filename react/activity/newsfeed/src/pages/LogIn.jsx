import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    useremail: "",
    userpassword: "",
  });

  const handlechange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.useremail === "" || userData.userpassword === "") {
      alert("Fill the form");
      return;
    }

    const myData = JSON.parse(localStorage.getItem("datauser"));

    const checkauth = myData.find(
      (e) =>
        e.useremail === userData.useremail &&
        e.userpassword === userData.userpassword
    );

    if (!checkauth) {
      alert("Your not regiatered user");
      return;
    }

    localStorage.setItem("auth", JSON.stringify(checkauth));

    setUserData({ useremail: "", userpassword: "" });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            value="Login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 cursor-pointer transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;