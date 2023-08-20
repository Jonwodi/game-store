import { Link } from "react-router-dom";
import { useBasketContext } from "../contexts/BasketContext";
import "../sass/Checkout.scss";

interface Props {
  onRemoveFromCheckout: (product: any) => any;
  checkOutTotal: number | string;
}

export default function Checkout({
  onRemoveFromCheckout,
  checkOutTotal,
}: Props) {
  const { basketItems, setBasketItems } = useBasketContext();

  return (
    <div className="checkout">
      <div className="checkout__cart">
        <Link to="/" className="checkout__link">
          Go back
        </Link>
        {basketItems.length === 0 ? (
          <p className="checkout__noItems">No items</p>
        ) : (
          <div className="checkout__items">
            {basketItems.map((item) => (
              <div key={item.id} className="checkout__item">
                <div className="checkout__itemInfo">
                  <img
                    className="checkout__itemImg"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="checkout__text">
                    <h2>{item.title}</h2>
                    <p className="checkout__price">
                      <img
                        className="checkout__coins"
                        src="/assets/coins.png"
                        alt="coins image"
                      />
                      {`${item.price} Gill`}
                    </p>
                  </div>
                </div>
                <img
                  onClick={() => onRemoveFromCheckout(item)}
                  className="checkout__delete"
                  src="/assets/bin.png"
                  alt="bin image"
                />
              </div>
            ))}
          </div>
        )}
        <p className="checkout__total">
          Total
          <span className="checkout__totalPrice">
            {`${checkOutTotal} Gill`}
          </span>
        </p>
      </div>
    </div>
  );
}
