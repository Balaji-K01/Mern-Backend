import { useRef } from "react";

const App = () => {
  const myref = useRef(null);
  const showData = useRef(null);

  const handleChange = () => {
    const data = myref.current.value;

    if (data > 18) {
      showData.current.innerText = "Eligible";
      showData.current.style.color = "green";
    } else {
      showData.current.innerText = "Not Eligible";
      showData.current.style.color = "red";
    }
  };
  return (
    <>
      <div>
        <form>
          <input type="text" ref={myref} onChange={handleChange} />
          <p ref={showData}></p>
        </form>
      </div>
    </>
  );
};

export default App;
