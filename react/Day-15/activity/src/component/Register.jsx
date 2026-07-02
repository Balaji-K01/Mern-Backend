import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });
  const [saveData, setSaveData] = useState("");

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
      return
    }
      myData.push(userData);
    
   /*  setSaveData(myData); */

    localStorage.setItem("datauser", JSON.stringify(myData));
    alert("sucessfully added");

    setUserData({ username: "", useremail: "", userpassword: "" });
    navigate('/login')

  };

  return (
    <>
      <div>
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handlechange}
              type="text"
              value={userData.username}
              name="username"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="useremail"
              placeholder="Enter Your Email"
              value={userData.useremail}
              onChange={handlechange}
            />
            <input
              type="password"
              name="userpassword"
              placeholder="Enter Your Password"
              value={userData.userpassword}
              onChange={handlechange}
            />
            <input type="submit" value={"Register"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
