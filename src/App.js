import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage.jsx";
import HomePage from "./components/HomePage.jsx";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart}/>} exact />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
//cart={cart} setCart={setCart}