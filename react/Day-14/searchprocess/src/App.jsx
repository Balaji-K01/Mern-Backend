import { useEffect, useState } from "react";

const App = () => {
  const [dataShow, setDataShow] = useState([]);
  const [search,setSearch]=useState("") 


  const fetchData = async () => {
    const dataFetch = await fetch("https://dummyjson.com/products?limit=6");
    const res = await dataFetch.json();
    setDataShow(res.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchFun=(e)=>{
    setSearch(e.target.value)
  }
  const searchResult=dataShow.filter((e,i)=>e.title.toLowerCase().includes(search.toLowerCase()))
  
  
  return (
    <>
      <h1>Search process</h1>

      <div className="bg-amber-100 h-500 p-5 text-black  gap-20  flex-col justify-center items-center">
        <div className="mb-10 ">
          <input
          onChange={searchFun}
            type="text"
            placeholder="Enter the Product"
            className="w-100 p-2 text-black "
          />
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div className="flex  justify-between flex-wrap gap-20 items-center">
          {searchResult.length > 0 ? searchResult.map((e, i) => (
            <div key={i + 0} className="bg-white p-2 w-80 h-120  rounded">
              <img src={e.images} alt="" />
              <h1>{e.title}</h1>
              <p className="mb-15">{e.category}</p>
              <button className="bg-blue-600 text-white rounded  p-1 w-25">
                Buy Now
              </button>
            </div>
          )) : "No Product Available"}
        </div>
      </div>
    </>
  );
};

export default App;
