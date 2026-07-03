import { useEffect, useState } from "react";

const App = () => {
  const [datas, setDatas] = useState([]);

  const [uniCat, setUniCat] = useState([]);

  const [catSave, setCatSave] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const products = async () => {
    try {
      const productItems = await fetch("https://dummyjson.com/products");
      const changeData = await productItems.json();
      setDatas(changeData.products);

      const takeCat = changeData.products.map((e) => e.category);
      const uniItems = [...new Set(takeCat)];
      setUniCat(uniItems);
    } catch (error) {
      console.error("error", error);
    }
  };

  const takeData = (e) => {
    setSearch(e.target.value);
  };

  const sortValues = (e) => {
    setSort(e.target.value);
  };
  const handleChange = (e) => {
    setCatSave(e.target.value);
  };
  let sortProduct = [...datas];

  if (sort === "asc") {
    sortProduct.sort((a, b) => a.price - b.price);
  }

  if (sort === "dec") {
    sortProduct.sort((a, b) => b.price - a.price);
  }

  if (catSave) {
    sortProduct = sortProduct.filter((e) => e.category === catSave);
  }

  if (search) {
    sortProduct = sortProduct.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  useEffect(() => {
    products();
  }, []);

  

  return (
    <>
      <div>
        <h1>search and filter</h1>

        <input
          type="text"
          onChange={takeData}
          placeholder="Enter the product"
        />

        <select name="" id="" onChange={handleChange}>
          <option value="unicItems">select</option>
          {uniCat.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select name="" id="" onChange={sortValues}>
          <option value="">Choose</option>
          <option value="asc">Low to High</option>
          <option value="dec">High to Low</option>
        </select>

        <div className="flex flex-wrap gap-20 justify-between">
          {sortProduct.map((e) => (
            <div key={e.id} className="bg-purple-400 text-white p-5 w-30">
              <p>{e.title}</p>
              <p>{e.category}</p>
              <p>{e.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
