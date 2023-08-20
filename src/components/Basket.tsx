import { Link } from "react-router-dom";
import { useBasketContext } from "../contexts/BasketContext";
import "../sass/Basket.scss";

interface Props {
  onRemoveFromBasket: (product: any) => any;
  basketTotal: number | string;
}

export default function Basket({ onRemoveFromBasket, basketTotal }: Props) {
  const { basketItems, setBasketItems } = useBasketContext();

  return (
    <div className="basket">
      <div className="basket__wrap">
        <h2 className="basket__heading">Basket</h2>
        {basketItems.length > 0 ? (
          <>
            <div className="basket__cart">
              <div className="basket__items">
                {basketItems.map((item) => (
                  <div key={item.id} className="basket__item">
                    <div className="basket__itemInfo">
                      <img
                        className="basket__itemImg"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="basket__itemText">
                        <h2 className="basket__itemHeading">{item.title}</h2>
                        <p className="basket__itemPrice">
                          <img
                            className="basket__coins"
                            src="/assets/coins.png"
                            alt="coins image"
                          />
                          {`${item.price} Gill`}
                        </p>
                      </div>
                    </div>
                    <img
                      onClick={() => onRemoveFromBasket(item)}
                      className="basket__delete"
                      src="/assets/bin.png"
                      alt="bin image"
                    />
                  </div>
                ))}
              </div>
              <p className="basket__total">
                Total
                <span className="basket__totalPrice">
                  {`${basketTotal} Gill`}
                </span>
              </p>
            </div>
            <Link className="basket__link" to="/checkout">
              Continue
            </Link>
          </>
        ) : (
          <>
            <p className="basket__noItems">No items</p>
            <button disabled className="basket__btn">
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
