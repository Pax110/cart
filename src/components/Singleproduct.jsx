import React from "react";
import "../styles.css";

const Singleproduct = ({ prod, cart, setCart }) => {
  const handleAddToCart = () => {
    setCart([...cart, prod]);
  };
  const handleRemoveFromCart = () => {
    setCart(cart.filter((c) => c.id !== prod.id));
  };
  return (
    <div className="products">
      <img src={prod.image} alt={prod.title} />
      <div className="prodDesc">
        <span style={{ fontWeight: 700 }}> {prod.title} </span>
        <span> $ {prod.price} </span>
      </div>

      {cart.includes(prod) ? (
        <button onClick={handleRemoveFromCart}>Remove from cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Singleproduct;
