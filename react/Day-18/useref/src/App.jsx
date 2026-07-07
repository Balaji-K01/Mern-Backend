import { useRef } from "react";

const App = () => {
  const myref = useRef(null);
  const showData=useRef(null)

  /*  const handleclick=()=>{
    myref.current.innerText="changes"
  } */

    const handleChange=()=>{
      const data = myref.current.value;

      if (data > 18) {
      showData.current.innerText = "Eligible";
      showData.current.style.color = "green";
    } else {
      showData.current.innerText = "Not Eligible";
      showData.current.style.color = "red";
    }
    }
  return (
    <>
      <div>
        {/*       <h1 ref={myref}>Before change</h1>
      <button onClick={handleclick}>Clickme</button>
 */}

        <form>
          <input type="text" ref={myref} onChange={handleChange} />
          <p ref={showData}></p>
        </form>
      </div>
    </>
  );
};

export default App;
