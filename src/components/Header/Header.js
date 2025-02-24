import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
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
