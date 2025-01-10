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
            <li className="navbar__item" style={{animationDelay: '0.2s'}}>Home</li>
            <li className="navbar__item" style={{animationDelay: '0.4s'}}>Product</li>
            <li className="navbar__item"  style={{animationDelay: '0.6s'}}>Pricing</li>
            <li className="navbar__item" style={{animationDelay: '0.8s'}}>Testimonials</li>
            <li className="navbar__item" style={{animationDelay: '1s'}}>Contact Us</li>
          </ul>
          <button className="navbar__btn">Buy Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
