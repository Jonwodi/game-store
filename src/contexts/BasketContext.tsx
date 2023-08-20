import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export interface IBasketItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface IBasketContext {
  basketItems: IBasketItem[];
  setBasketItems: Dispatch<SetStateAction<IBasketItem[]>>;
}

const BasketContext = createContext<IBasketContext>({
  basketItems: [],
  setBasketItems: () => {},
});

export const useBasketContext = () => {
  return useContext(BasketContext);
};

interface BasketProviderProps {
  children: ReactNode;
  value: IBasketContext;
}

const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<IBasketItem[]>([]);

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        setBasketItems,
      }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
