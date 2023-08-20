import { useBasketContext } from "../contexts/BasketContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Checkout from "../components/Checkout";

export default function CheckoutPage() {
  const { basketItems, setBasketItems } = useBasketContext();

  // Remove selected product from the Checkout basket
  const RemoveFromCheckout = (product: any) => {
    setBasketItems(basketItems.filter((item: any) => item.id !== product.id));
    // enable add to basket button for specific product once it is removed from the basket
    product.disabled = false;
  };

  // Checkout basket price total
  const basketPricesList: number[] = [];
  basketItems.forEach((item) => {
    basketPricesList.push(item.price);
  });
  const total = basketPricesList.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  return (
    <div>
      <Navbar />
      <Hero className="hero--small" />
      <Logo src="/assets/logo.png" alt="logo" className="logo--checkout" />
      <Checkout
        onRemoveFromCheckout={RemoveFromCheckout}
        checkOutTotal={total}
      />
    </div>
  );
}
