
const SchoolCard = ({schools}) => {
  
    
  return (
    <>
        <div className="border rounded bg-gray-900 border-gray-100 shadow-xl p-10">
            <div className="bg-gray-400 p-3">
                <span>{schools.schoolName}</span> <br />
                <span>{schools.city}</span>
            </div>
            <div className="p-3 flex flex-col gap-2 text-white">
                <p>Principal   :  {schools.principal}</p>
                <p>Students   :  {schools.students}</p>
                <p>Teachers   :  {schools.teachers}</p>
            </div>
        </div>
    </>
  )
}

export default SchoolCard