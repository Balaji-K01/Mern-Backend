import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <div className="flex justify-around p-5 bg-blue-900 text-white">
        <Link to={"/"}>Task1</Link>
        <Link to={"/task2"}>Task2</Link>
        <Link to={"/task3"}>Task3</Link>
        <Link to={"/task4"}>Task4</Link>
        <Link to={"/task5"}>Task5</Link>
      </div>
    </>
  )
}

export default Navbar