import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <img src={logo} alt="" />
          </a>
          <ul className="navbar__list">
            <li className="navbar__item">Home</li>
            <li className="navbar__item">Product</li>
            <li className="navbar__item">Pricing</li>
            <li className="navbar__item">Testimonials</li>
            <li className="navbar__item">Contact Us</li>
          </ul>
          <button className="navbar__btn">Buy Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
