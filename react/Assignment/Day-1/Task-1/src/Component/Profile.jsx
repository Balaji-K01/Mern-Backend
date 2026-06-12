const Profile = () => {
  return (
    <>
      <div className="container bg-gray-700">
        <div className="name flex p-6 bg-gray-500">
          <div className="logo  bg-white mr-5">
            <h1>BK</h1>
          </div>
          <div className="student-name text-white">
            <h1 className="text-2xl font-bold">Balaji K</h1>
            <p>Student</p>
          </div>
        
        </div>
          <div className="details p-5 text-white">
            <div className="text-1 p-3">
              <span className="font-bold">Course</span>
              <p>B.Tech Information Technology</p>
            </div>
            <div className="text-1 p-3">
              <span className="font-bold">City</span>
              <p>Pondicherry</p>
            </div>
            <div className="text-1 p-3">
              <span className="font-bold">College</span>
              <p>Sri Manakula Vinayagar Engineering College</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Profile;
