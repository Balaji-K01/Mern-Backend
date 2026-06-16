import Product from "./component/Product";


const App = () => {
  const dataValue="This is my data";
  const productCart=2000;
  return (
    <>
    <Product productName={{dataValue,productCart}} />
    </>
  )
}

export default App