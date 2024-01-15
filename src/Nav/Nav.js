import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav">
        <input
          type="text"
          placeholder="Enter text to search"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className="profile-container">
        <FiHeart className="nav-icons" />
        <AiOutlineShoppingCart className="nav-icons" />
        <AiOutlineUserAdd className="nav-icons" />
      </div>
    </nav>
  );
};

export default Nav;
