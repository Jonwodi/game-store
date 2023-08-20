// useRemoveFromBasket.ts
import { useBasketContext } from "../contexts/BasketContext";

const useRemoveFromBasket = () => {
  const { basketItems, setBasketItems } = useBasketContext();

  const removeFromBasket = (product: any) => {
    setBasketItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    // enable add to basket button for specific product once it is removed from the basket
    product.disabled = false;
  };

  return { basketItems, setBasketItems, removeFromBasket };
};

export default useRemoveFromBasket;
