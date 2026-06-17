import { useState } from "react";

const Task4 = () => {
  const [count, setCount] = useState(0);

  

  const handleClick = () => {
    setCount(count + 1);
    setUsername(!user);
  };
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
};

export default Task4;
