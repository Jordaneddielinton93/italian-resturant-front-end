import { createSlice } from "@reduxjs/toolkit";

type IinitialState = {
  likeBasket: {
    recipeId: number;
  }[];
};

type IPayloads = {
  payload: number;
};

let initialState: IinitialState = {
  likeBasket: [],
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

    clearFavRecipeBasket: (state) => {
      state.likeBasket = [];
    },
  },
});

export const {
  addFavRecipeToBasket,
  removeFavRecipeFromBasket,
  clearFavRecipeBasket,
  addInistialRecipeFavouriteBasket,
} = counterSlice.actions;
export default counterSlice.reducer;
