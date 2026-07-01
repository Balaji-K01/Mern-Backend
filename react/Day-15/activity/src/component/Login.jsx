import { useState } from "react";
import { useNavigate } from "react-router-dom"; //

const Login = () => {
  const [loginData, setLoginData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (loginData.userEmail === "" || loginData.userPassword === "") {
      alert("details required");
      return;
    }

    navigate("/otpverify"); 
  };

  return (
    <div className="bg-purple-700 flex flex-col w-screen h-screen text-white items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
          Welcome
        </h2>
        <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            name="userEmail"
            value={loginData.userEmail}
            placeholder="Enter Your email id"
            onChange={handleChange}
            className="border p-2 bg-gray-50 text-black rounded w-full"
          />
          <input
            type="password"
            name="userPassword"
            value={loginData.userPassword}
            placeholder="Enter Your password"
            onChange={handleChange}
            className="border p-2 bg-gray-50 text-black rounded w-full"
          />
          <input
            type="submit"
            value={"Login"}
            className="bg-purple-700 text-white p-2 rounded font-semibold w-full cursor-pointer hover:bg-purple-800 transition"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;