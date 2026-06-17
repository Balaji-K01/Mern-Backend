import React, { useState } from "react";

function Task3() {
  const [name, setName] = useState("Balaji");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default Task3;