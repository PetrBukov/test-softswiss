import rocketImg from "../../assets/rocket.png";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <button className="footer__logo">
        <img src={rocketImg} alt="cozy rocket icon" />
      </button>
      <div className="footer__text">Exciting space adventure!</div>
    </footer>
  );
};
