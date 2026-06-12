
const Navbar=(()=>{
    return (
        <>
            <div className="bg-black p-5">
                <Logo/>
            </div>
        </>
    )
})

const Logo=(()=>{
    return (
        <>
        <div className="w-100 mx-2">
            <img src="../../public/react_logo-removebg-preview.png" alt="logo image" className="w-15"/>
        </div>
        </>
    )
})

const Links=(()=>{
    return(
        <>
        <div>
            <Link>Home</Link>
            <Link>Skill</Link>
        </div>
        </>
    )
})

export default Navbar;