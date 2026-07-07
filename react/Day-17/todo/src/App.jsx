import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userMobile: "",
    userMail: "",
  });

  const [saveData, setSaveData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const userDatas={id:Date.now(),...formData}
    setSaveData((prev) => [...prev,userDatas]);

    setFormData({ userName: "",
    userMobile: "",
    userMail: "",})
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleChange}
          value={formData.userName}
          name="userName"
        />
        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          onChange={handleChange}
          name="userMobile"
          value={formData.userMobile}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          name="userMail"
          value={formData.userMail}
        />
        <button onClick={handleAdd}>Add</button>
        <button>Update</button>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>s.No</th>
              <th>Name</th>
              <th>Mobilr</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {saveData.map((e,i) => (
              <tr key={i+1}>
                <td>{e.id}</td>
                <td>{e.userName}</td>
                <td>{e.userMobile}</td>
                <td>{e.userMail}</td>
                <td>
                  <button>Edit</button> || <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
