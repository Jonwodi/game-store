import { render, screen } from "@testing-library/react";
import BasketProvider from "../contexts/BasketContext";
import { productData } from "../productData";
import HomePage from "../pages/HomePage";

describe("HomePage", () => {
  describe("Store basket continue button", () => {
    it("tests that the continue button is rendered in the store basket", () => {
      render(<HomePage />);
      const continueBtn = screen.getByRole("button", { name: /continue/i });
      expect(continueBtn).toBeInTheDocument();
    });

    it("tests that the continue button in the store basket is visible to the user", () => {
      render(<HomePage />);
      const continueBtn = screen.getByRole("button", { name: /continue/i });
      expect(continueBtn).toBeVisible();
    });

    it("tests that the continue button is disabled on if the store basket is empty", () => {
      const mockContextValue = {
        basketItems: [],
        setBasketItems: vitest.fn(),
      };

      render(
        <BasketProvider value={mockContextValue}>
          <HomePage />
        </BasketProvider>
      );

      const continueBtn = screen.getByRole("button", { name: /continue/i });
      expect(continueBtn).toBeDisabled();
    });
  });

  describe("Store products", () => {
    it("tests that products are rendered in the store home page", () => {
      render(<HomePage />);

      productData.forEach((product) => {
        const productTitle = screen.getByText(product.title);
        expect(productTitle).toBeInTheDocument();

        const productDescription = screen.getByText(product.description);
        expect(productDescription).toBeInTheDocument();

        const productPrice = screen.getByText(
          new RegExp(product.price.toString(), "i")
        );
        expect(productPrice).toBeInTheDocument();

        const productImgAlt = screen.getByAltText(product.title);
        expect(productImgAlt).toBeInTheDocument();
      });
    });

    it("tests that products in the store home page are visible to users", () => {
      render(<HomePage />);
      productData.forEach((product) => {
        const productTitle = screen.getByText(product.title);
        expect(productTitle).toBeVisible();

        const productDescription = screen.getByText(product.description);
        expect(productDescription).toBeVisible();

        const productPrice = screen.getByText(
          new RegExp(product.price.toString(), "i")
        );
        expect(productPrice).toBeVisible();

        const productImgAlt = screen.getByAltText(product.title);
        expect(productImgAlt).toBeVisible();
      });
    });
  });
});
