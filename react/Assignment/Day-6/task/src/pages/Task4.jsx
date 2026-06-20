import { useState } from "react";

const Task4 = () => {
  const [login, setLogin] = useState(false);
  const userLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <div className="text-center p-70">
        <h1> {login ? "User Logged In" : "User Logged out"}</h1> <br /><br />
        <button onClick={userLogin} className="bg-purple-950 rounded px-3 py-2 text-white">{login ? "Login" : "Logout"}</button>
      </div>
    </>
  );
};

export default Task4;
