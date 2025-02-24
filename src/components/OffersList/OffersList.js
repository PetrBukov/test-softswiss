import { OFFERS_LIST } from "./OffersList.constants";
import "./OffersList.scss";

export const OffersList = () => {
  return (
    <div className="offers-list">
      <h2>Offers</h2>
      <div className="offers-list__grid">
        {OFFERS_LIST.map((offer) => {
          return (
            <div key={offer.id} className="offers-list__item offer">
              <div className="offer__inner">
                <h3 className="offer__title">{offer.title}</h3>
                <p className="offer__subtitle">{offer.subtitle}</p>
                <button className="offer__button">Learn more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
