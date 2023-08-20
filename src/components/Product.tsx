import { useState } from "react";
import "../sass/Product.scss";

interface Props {
  title: string;
  description: string;
  image: string;
  price: number;
  disabled: boolean;
  onAddToBasket: (product: any) => any;
}

export default function Product({
  title,
  description,
  image,
  price,
  disabled,
  onAddToBasket,
}: Props) {
  const [opacity, setOpacity] = useState(0.2);

  return (
    <div className="product">
      <img
        className="product__img"
        src={image}
        alt={title}
        style={{ opacity: `${disabled == true ? opacity : 1}` }}
      />
      <div>
        <h2
          className="product__title"
          style={{ opacity: `${disabled == true ? opacity : 1}` }}>
          {title}
        </h2>
        <p
          className="product__description"
          style={{ opacity: `${disabled == true ? opacity : 1}` }}>
          {description}
        </p>
        <p
          className="product__price"
          style={{ opacity: `${disabled == true ? opacity : 1}` }}>
          <img
            className="product__coins"
            src="/assets/coins.png"
            alt="coins image"
          />
          {`${price} Gill`}
        </p>
        <div className="product__btn--wrap">
          <button
            disabled={disabled}
            onClick={onAddToBasket}
            className="product__btn">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
