import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'

const Header = () => {
  return (
    <div>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart</Link>
        </li>
        <div>

        </div>

      </ul>
    </div>
  );
};

export default Header;
