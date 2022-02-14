import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
