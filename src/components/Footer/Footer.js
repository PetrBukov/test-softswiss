import { useEffect, useState } from "react";

import rocketImg from "../../assets/rocket.png";
import "./Footer.scss";

export const Footer = () => {
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    if (!isFlying) return;

    const timerId = setTimeout(() => {
      setIsFlying(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [isFlying]);

  return (
    <footer className="footer">
      <button
        disabled={isFlying}
        className={`footer__logo ${
          isFlying ? "footer__logo--flying" : "footer__logo--pending"
        }`}
        onClick={() => setIsFlying((prev) => !prev)}
      >
        <img src={rocketImg} alt="cozy rocket icon" />
      </button>
      <div className="footer__text">Exciting space adventure!</div>
    </footer>
  );
};
