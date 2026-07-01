import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [userOtp, setUserOtp] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("otpUserEmail") || "User";

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    
    const correctOtp = localStorage.getItem("sentOtp");

    if (userOtp === correctOtp) {
      alert("OTP Verification Successful! Logging you in...");
      
      localStorage.removeItem("sentOtp"); 
      
      navigate("/"); 
    } else {
      alert("Invalid OTP code. Please try again.");
    }
  };

  return (
    <div className="bg-purple-700 flex flex-col w-screen h-screen text-white items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Enter OTP Code</h2>
        <p className="text-sm text-gray-600 mb-6">
          We sent a verification code to <br />
          <strong>{email}</strong>
        </p>
        
        <form className="flex flex-col gap-5" onSubmit={handleOtpSubmit}>
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={userOtp}
            onChange={(e) => setUserOtp(e.target.value)}
            className="border p-3 bg-gray-50 text-black text-center text-xl font-bold tracking-widest rounded w-full"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 rounded font-semibold w-full hover:bg-purple-800 transition"
          >
            Verify & Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;