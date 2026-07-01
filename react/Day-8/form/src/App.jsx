import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const userName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <p>{name}</p>
      <form>
        <label htmlFor="name">Enter Your Name</label>
        <input type="text" id="name" onChange={userName} />
      </form>
    </>
  );
};

export default App;
