import React, { useState } from "react";

function Task5() {
  const [user, setUser] = useState({
    name: "Balaji",
    age: 24,
    city: "Pondicherry",
  });

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>
    </div>
  );
}

export default Task5;