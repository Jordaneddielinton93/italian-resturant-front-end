import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import HeroImageBasket from "../HeroImageBasket";
import counterReducer, {
  addFavRecipeToBasket,
} from "../../01-Reducers/resturantSlice";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/components/02-store/store";

let ProviderComp = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("should test the favourtes basket", () => {
  it("should test the favourite basket to have a number passed in from redux", () => {
    render(
      <ProviderComp>
        <HeroImageBasket />
      </ProviderComp>
    );
    let basketCount = screen.getByTestId("spanTest");
    expect(basketCount.textContent).toBe("0");
  });
});
