import React from "react";
import { Link } from "react-router-dom"; // Correct import

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar-container">
          <a to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
