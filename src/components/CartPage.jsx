import React from "react";
import Singleproduct from "./Singleproduct";

const CartPage = ({ cart, setCart }) => {
  console.log("cart in cartPage", cart);
  return (
    <>
      <div style={{ fontSize: 30 }}>Cart</div>
      <br />
      <span>My Cart</span>
      <span>Total:</span>
      <div className="productContainer">
        {console.log("cart cartpage 2", cart)}
        {cart.map((prod) => (
          <Singleproduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};

export default CartPage;
