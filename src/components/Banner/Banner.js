import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="banner__content">
          <div className="banner__title">
            Discover the vast expanses of <span>space</span>
          </div>
          <div className="banner__subtitle">
            Where the possibilities are <span>endless!</span>
          </div>
          <button className="banner__button">Learn more</button>
        </div>
      </div>
    </div>
  );
};
