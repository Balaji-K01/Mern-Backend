import { useState } from "react"


const Task3 = () => {
  const [age,setAge]=useState(18);
  const incAge=()=>{
    setAge(age+1)
  }
  return (
   <>
   <div className="text-center pt-9">
    <h1>Age : {age}</h1>
    <button className="px-2.5 py-1.5 text-white bg-yellow-950 " onClick={incAge}>+</button>
   </div>
   </>
  )
}

export default Task3