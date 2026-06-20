import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);

  const inccount=()=>{
    setCount(count+1)
  }
  const deccount=()=>{
    setCount(count-1)
  }
  const resetcount=()=>{
    setCount(0)
  }

  return (
    <>
      <div className="p-20">
        <h1 className="p-3 text-2xl">Count : {count}</h1>
        <button className="px-3 mr-10 bg-black text-white" onClick={inccount}>+</button>
        <button className="px-3 mr-10 bg-black text-white" onClick={deccount}>-</button> <br />
        <button className="px-5 mr-10 bg-black text-white mt-5" onClick={resetcount}>reset</button>
      </div>
    </>
  );
};

export default Task1;
