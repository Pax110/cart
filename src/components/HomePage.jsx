import React, { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    };

    getData();
  }, []);

  console.log("data is", data);
  console.log("data o price", data[0]?.price);
  console.log("data o id", data[0]?.id);
  return <div className="productContainer">
    {data.map((prod)=>(
      <Singleproduct prod={prod}/>
    ))}
  </div>;
};

export default HomePage;
