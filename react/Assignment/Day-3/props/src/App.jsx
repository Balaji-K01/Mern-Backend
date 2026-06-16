import Student from "./assets/Component/Student";

const App = () => {
  const studentName="Balaji";
  const studentAge=23;
  const courseName="MERN stack";
  const studentCity="Pondicheery"; 
  return (
    <Student studentDetails={{studentName,studentAge,courseName,studentCity}}/>
  )
}

export default App