import React from "react";

const Product = ({ cart, setCart }) => {
    const addItem = (price)=>{
        setCart([...cart, price]);
    }
  return (
    <div>
      <button onClick={()=>addItem(100)}>Add ₹100</button>
      <button onClick={()=> addItem(200)}>Add ₹200</button>
      <button onClick={()=>addItem(300)}>Add ₹300</button>
      <button onClick={()=> addItem(400)}>Add ₹400</button>
      <button onClick={()=> addItem(500)}>Add ₹500</button>
    </div>
  );
};

export default Product;
