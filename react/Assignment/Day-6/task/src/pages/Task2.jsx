import { useState } from "react"

const Task2 = () => {

  const [name,setName]=useState("Sudhan");
  const changename=()=>{
    setName("Ravi")
  }
  return (
    <>
    <div>
      <h1>
        {name}
      </h1>
      <button className="px-6 py-1 text-white  bg-purple-900" onClick={changename}>change</button>
    </div>
    </>
  )
}

export default Task2