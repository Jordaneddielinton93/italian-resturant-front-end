import React from "react";
import { render, act } from "@testing-library/react";

import { Provider, useDispatch } from "react-redux";
import { store } from "../02-store/store";
import MenuFavourites from "./MenuFavourites";

const recipes = [
  {
    recipeid: 1,
    recipetitle: "Recipe 1",
    recipediscription: "Description 1",
    recipecooktime: "30 minutes",
    reciperatings: 4,
  },
  {
    recipeid: 2,
    recipetitle: "Recipe 2",
    recipediscription: "Description 2",
    recipecooktime: "1 hour",
    reciperatings: 5,
  },
];

const state = {
  restaurant: {
    likeBasket: [1],
  },
};

describe("MenuFavourites", () => {
  it("displays favourites correctly", () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <MenuFavourites recipes={recipes} />
      </Provider>
    );
    expect(getByText("YourFavourites")).toBeInTheDocument();
    expect(getAllByTestId("recipe-card")).toHaveLength(1);
  });
});
