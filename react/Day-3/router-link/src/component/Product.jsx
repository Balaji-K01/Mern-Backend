import { data } from "react-router-dom";

const Product = (props) => {
  console.log(props.productName);
  
  const {dataValue,productCart}=props.productName;


  return (
    <>
      <h1>{productCart}</h1>
      <h1>{dataValue}</h1>
    </>
  );
};

export default Product;
