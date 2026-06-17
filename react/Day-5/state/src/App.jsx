/* import { Component } from "react";

class App extends Component{

  constructor(){
    super()
    this.state={count:0}
  
    
  }
   inc=()=>{
    this.setState({count:this.state.count+1})
   }
   componentDidMount(){
    console.log("running mount");
   }
   componentDidUpdate(){
    console.log("running mount update");
   }
   componentWillUnmount(){
    console.log("unmount");
    
   }
  render(){
    console.log("Running");
    
    return(
      <>
      <h1>Value count {this.state.count}</h1>
      <button onClick={this.inc}>Count</button>
      </>
    )
  }
}

export default App */

import { useState } from "react"

const App = () => {

  const [count,setCount]=useState(0)

  const [user,setUsername]=useState(true)

  const handleClick=()=>{
    setCount(count+1)
    setUsername(!user)
  }

  return (
    <>
    <div>
      <p>{count}</p>
      <div>{ user ? <h1>{"Balaji"}</h1> : <h1>{"User Name not Found"}</h1>}</div>
      <button onClick={handleClick}>Click</button>
    </div>
    </>
  )
}

export default App