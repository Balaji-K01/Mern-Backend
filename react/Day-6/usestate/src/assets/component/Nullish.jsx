import { useState } from "react";

const Nullish = () => {
  const [themechange, setThemeChange] = useState("React");

  const changeNull = () => {
    setThemeChange((data) => (data === null ? "React" : null));
  };

  return (
    <>
      <h1 className="bg-black p-10 text-white">
        {themechange ?? "This is Nullish"}
      </h1>

      <button
        onClick={changeNull}
        className="mx-10 p-2 rounded bg-black text-white m-2"
      >
        Click
      </button>
    </>
  );
};

export default Nullish;