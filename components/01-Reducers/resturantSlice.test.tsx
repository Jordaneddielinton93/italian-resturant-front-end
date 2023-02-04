import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { initialState } from "./resturantSlice";
import counterSlice, {
  addFavRecipeToBasket,
  removeFavRecipeFromBasket,
  changeMenuStage,
  clearFavRecipeBasket,
} from "./resturantSlice";

describe("counterSlice", () => {
  it("should handle adding a recipe to the like basket", () => {
    const state = { ...initialState };
    const recipe = { recipeId: 123 };
    const newState = counterSlice(state, addFavRecipeToBasket(recipe));
    expect(newState).toEqual({
      ...state,
      likeBasket: [...state.likeBasket, recipe],
    });
  });

  it("should handle removing a recipe from the like basket", () => {
    const state = { ...initialState, likeBasket: [{ recipeId: 123 }] };
    const recipe = { recipeId: 123 };
    const newState = counterSlice(state, removeFavRecipeFromBasket(recipe));
    expect(newState).toEqual({
      ...state,
      likeBasket: [],
    });
  });

  it("should handle changing the menu stage", () => {
    const state = { ...initialState };
    const newMenuStage = "Cart";
    const newState = counterSlice(state, changeMenuStage(newMenuStage));
    expect(newState).toEqual({
      ...state,
      menuStage: newMenuStage,
    });
  });

  it("should handle clearing the like basket", () => {
    const state = { ...initialState, likeBasket: [{ recipeId: 123 }] };
    const newState = counterSlice(state, clearFavRecipeBasket());
    expect(newState).toEqual({
      ...state,
      likeBasket: [],
    });
  });
});
