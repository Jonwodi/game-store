import { useBasketContext } from "../contexts/BasketContext";
import { ProductItemProps } from "../productData";
import { productData } from "../productData";
import Container from "../components/Container";
import LeftBlock from "../components/LeftBlock";
import Navbar from "../components/Navbar";
import Basket from "../components/Basket";
import Store from "../components/Store";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Product from "../components/Product";

export default function HomePage() {
  const { basketItems, setBasketItems } = useBasketContext();
  const products = productData;

  // Add selected product to the Store basket
  const addToBasket = (product: ProductItemProps) => {
    setBasketItems((prevCartItems: any) => [...prevCartItems, product]);
    // Disable the add to basket button for the specific added product
    product.disabled = true;
  };

  // Remove selected product from the Store basket
  const removeFromBasket = (product: ProductItemProps) => {
    setBasketItems(basketItems.filter((item: any) => item.id !== product.id));
    // enable add to basket button for specific product once it is removed from the basket
    product.disabled = false;
  };

  // Store cart price total
  const basketPricesList: number[] = [];
  basketItems.forEach((item) => {
    basketPricesList.push(item.price);
  });
  const total = basketPricesList.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  return (
    <Container>
      <LeftBlock>
        <Navbar />
        <Hero className="hero" />
        <Logo src="/assets/logo.png" alt="logo" className="logo" />
        <Store>
          {products.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              disabled={product.disabled}
              onAddToBasket={() => addToBasket(product)}
            />
          ))}
        </Store>
      </LeftBlock>
      <Basket onRemoveFromBasket={removeFromBasket} basketTotal={total} />
    </Container>
  );
}
