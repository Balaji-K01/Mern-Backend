import { useEffect, useState } from "react";

const App = () => {
  console.log("component Running");
  const [data, setData] = useState("Welcome");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData("react");
    console.log("Update component");
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => {
        prev + 1;
      });
    }, 1000);

    return clearInterval();
  }, [count]);
  return (
    <>
      <h1>useEffect</h1>
      {data}
      <br />
      {count}
    </>
  );
};

export default App;
