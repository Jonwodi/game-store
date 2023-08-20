import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";

describe("CheckoutPage", () => {
  describe("Checkout basket go back link", () => {
    it("tests that the go back link is in the checkout basket", () => {
      render(
        <MemoryRouter>
          <CheckoutPage />
        </MemoryRouter>
      );
      const goBackLink = screen.getByRole("link", { name: /go back/i });
      expect(goBackLink).toBeInTheDocument();
    });

    it("tests that the go back link in the checkout basket is visible to the user", () => {
      render(
        <MemoryRouter>
          <CheckoutPage />
        </MemoryRouter>
      );
      const goBackLink = screen.getByRole("link", { name: /go back/i });
      expect(goBackLink).toBeVisible();
    });

    it("tests that the go back link navigates the user to the store home page once clicked", async () => {
      render(
        <MemoryRouter initialEntries={["/checkout"]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </MemoryRouter>
      );
      const goBackLink = screen.getByRole("link", { name: /go back/i });

      user.setup();
      await user.click(goBackLink);

      const homePageStoreProduct = screen.getByText(
        /bloodborne is an action role\-playing video game developed by fromsoftware\./i
      );
      expect(homePageStoreProduct).toBeInTheDocument();
    });
  });

  describe("Checkout basket price total", () => {
    it("tests that the checkout price total is in the checkout basket", () => {
      render(
        <MemoryRouter>
          <CheckoutPage />
        </MemoryRouter>
      );
      const totalText = screen.getByText(/total/i);
      expect(totalText).toBeInTheDocument();

      const totalPriceNumber = screen.getByText(/gill/i);
      expect(totalPriceNumber).toBeInTheDocument();
    });

    it("tests that the checkout price total in the checkout basket is visible to the user", () => {
      render(
        <MemoryRouter>
          <CheckoutPage />
        </MemoryRouter>
      );
      const totalText = screen.getByText(/total/i);
      expect(totalText).toBeVisible();

      const totalPriceNumber = screen.getByText(/gill/i);
      expect(totalPriceNumber).toBeVisible();
    });
  });
});
