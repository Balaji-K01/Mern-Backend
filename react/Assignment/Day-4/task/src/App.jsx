import SchoolCard from "./component/SchoolCard";

const App = () => {
  const schoolDetails = [
    {
      id: 1,
      schoolName: "ABC School",
      city: "Chennai",
      principal: "Ramesh",
      students: 2500,
      teachers: 120,
    },
    {
      id: 2,
      schoolName: "Green Valley School",
      city: "Coimbatore",
      principal: "Suresh",
      students: 1800,
      teachers: 95,
    },
    {
      id: 3,
      schoolName: "Sunrise Public School",
      city: "Madurai",
      principal: "Priya",
      students: 2200,
      teachers: 110,
    },
    {
      id: 4,
      schoolName: "National School",
      city: "Salem",
      principal: "Kumar",
      students: 2000,
      teachers: 100,
    },
  ];
  return (
    <>
      <div className="p-5 bg-blue-950 text-white text-center">
        <h1>School Managemnet</h1>
      </div>
      <div className="grid grid-cols-1 gap-2.5 p-4 sm:grid-cols-1 lg:grid-cols-3">
        {schoolDetails.map((schools)=>
          <SchoolCard schools={schools} />
        )}
      </div>
    </>
  );
};

export default App;
