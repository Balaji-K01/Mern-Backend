import React, { useState } from 'react'

const App = () => {

  const [userData,setUserData]=useState({username:"",userage:"",useremail:""})
  const handleChange=()=>{
      setUserData({...userData})
      console.log(userData);
      
  }
  return (
   <>
    <div>
      <form >
        <input type="text" onChange={handleChange} name='username' placeholder='Enter the Name'/>
        <input type="text" name='userage' placeholder='Enter the age'/>
        <input type="text"  name='useremail' placeholder='Enter the Email'/>
        <input type="submit"  value={"Register"}/>
      </form>
    </div>
   </>
  )
}

export default App