import { Button } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavRecipeToBasket,
  removeFavRecipeFromBasket,
} from "../01-Reducers/resturantSlice";

type Props = {
  recipeId: number;
};

export default function LikeRecipeButton({ recipeId }: Props) {
  let state = useSelector((state: any) => state.resturant);
  let dispatch = useDispatch();

  const addRecipeToLocalStorageAndRedux = () => {
    localStorage.setItem(`recipeId${recipeId}`, `${recipeId}`);
    dispatch(addFavRecipeToBasket(recipeId));
  };

  const removeRecipeFromLocalStorageAndRedux = () => {
    localStorage.removeItem(`recipeId${recipeId}`);
    dispatch(removeFavRecipeFromBasket(recipeId));
  };

  return (
    <AiFillHeart
      onClick={
        state.likeBasket.includes(recipeId)
          ? removeRecipeFromLocalStorageAndRedux
          : addRecipeToLocalStorageAndRedux
      }
      // if the recipe is in the like basket ^ add the remove function to the button else add function
      style={{
        cursor: "pointer",
        fontSize: "24px",
        borderRadius: "100%",
        background: "#DDE5E9",
        border: "solid thin green",
        color: state.likeBasket.includes(recipeId) ? "red" : "blue",
      }}
    />
  );
}
