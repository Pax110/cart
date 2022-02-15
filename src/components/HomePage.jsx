import React, { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const HomePage = ({cart, setCart}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    };

    getData();
  }, []);
  console.log("cart",cart)
  return (
    <div className="productContainer">
      {data.map((prod) => (
        <Singleproduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
      ))}
    </div>
  );
};

export default HomePage;
