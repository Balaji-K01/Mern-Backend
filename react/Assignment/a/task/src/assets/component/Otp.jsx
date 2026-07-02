import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const naviagte = useNavigate();
  const [userOtp, setUserOtp] = useState(0);
  const [otpData, setOtpData] = useState(0);
  const myData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    const datas = () => {
      setUserOtp(myData);
    };
    datas();
  }, []);

  const handleChange = (e) => {
    const res = e.target.value;
    setOtpData(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpData === myData) {
      alert("Succesfully logged in");
      naviagte("/home");
    } else {
      alert("Your enter worng otp");
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      localStorage.setItem("auth", JSON.stringify(newOtp));
      setUserOtp(newOtp);
      setOtpData("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-amber-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm text-center">
        <div className="text-lg font-semibold mb-4">Enter Your Otp</div>

        <h1 className="text-3xl font-bold text-blue-600 mb-6 tracking-widest">
          {userOtp}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="number"
            placeholder="Enter Your Otp"
            onChange={handleChange}
            value={otpData}
            className="border border-gray-300 rounded-md px-3 py-2 outline-none text-center focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="submit"
            value="Enter the Otp"
            className="bg-blue-600 text-white py-2 rounded-md "
          />
        </form>
      </div>
    </div>
  );
};

export default Otp;