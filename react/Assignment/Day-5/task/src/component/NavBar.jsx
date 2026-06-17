import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="flex justify-around p-5 bg-blue-950 text-white">
        <Link to={"/"}>Task-1</Link>
        <Link to={"/task2"}>Task-2</Link>
        <Link to={"/task3"}>Task-3</Link>
        <Link to={"/task4"}>Task-4</Link>
        <Link to={"/task5"}>Task-5</Link>
    </div>
    </>
  )
}

export default NavBar