import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const myData = JSON.parse(localStorage.getItem("auth"));
   if (!userDetails.username) {
        navigate("/login");
      }
  useEffect(() => {
    const datas = () => {
      setUserDetails(myData);
     
    };
    datas();
  }, []);

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <>
      <div>
        {userDetails.username} <br />
        {userDetails.useremail} <br />
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default Home;
