import { useState } from "react";

import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import cart from "../../assets/cart.svg";
import "./Header.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <button
          className={`header__menu-button header__menu-button--${
            isMenuOpen ? "opened" : "closed"
          }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img src={isMenuOpen ? close : menu} alt="logo" />
        </button>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-list-item">
              <a href="/">Home</a>
            </li>
            <li className="header__menu-list-item">
              <a href="/">Products</a>
            </li>
            <li className="header__menu-list-item">
              <a href="/">
                <img src={cart} alt="cart" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
