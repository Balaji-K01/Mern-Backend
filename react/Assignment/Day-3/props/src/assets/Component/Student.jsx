const Student = ({ studentDetails }) => {
  const { studentName, studentAge, courseName, studentCity } = studentDetails;
  console.log(studentAge);

  return (
    <>
      <div>{studentAge}</div>
      <div>{studentName}</div>
      <div>{studentCity}</div>
      <div>{courseName}</div>
    </>
  );
};

export default Student;
