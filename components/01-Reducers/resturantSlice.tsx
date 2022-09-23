import { createSlice } from "@reduxjs/toolkit";

type IinitialState = {
  likeBasket: {
    recipeId: number;
  }[];
  menuBasket: number[];
  menuStage: string;
};

let initialState: IinitialState = {
  likeBasket: [],
  menuBasket: [],
  menuStage: "Menu",
};

const counterSlice = createSlice({
  name: "LikedFoodsReducer",
  initialState,
  reducers: {
    addInistialRecipeFavouriteBasket(state, { payload }) {
      state.likeBasket = payload;
    },
    addFavRecipeToBasket(state, { payload }) {
      state.likeBasket = [...state.likeBasket, payload];
    },
    removeFavRecipeFromBasket(state, { payload }) {
      state.likeBasket = [
        ...state.likeBasket.filter((likeditem) => likeditem !== payload),
      ];
    },
    // ------------------Recipes page ^^------------------------
    changeMenuStage(state, { payload }: { payload: string }) {
      state.menuStage = payload;
    },
    addMenuRecipeIdAndAmount(state, { payload }) {
      let filteredFoodAndAmountFromState = state.menuBasket.filter((number) => {
        return number !== payload.recipeId;
      });
      state.menuBasket = [
        ...filteredFoodAndAmountFromState,
        ...Array(payload.recipeAmount)
          .fill("")
          .map(() => payload.recipeId),
      ];
    },
    // ------------------Menu's  page ^^------------------------

    clearFavRecipeBasket: (state) => {
      state.likeBasket = [];
    },
    // -------------Both Menu's and Recipes ^^------------------------
  },
});

export const {
  addFavRecipeToBasket,
  removeFavRecipeFromBasket,
  changeMenuStage,
  clearFavRecipeBasket,
  addInistialRecipeFavouriteBasket,
  addMenuRecipeIdAndAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
