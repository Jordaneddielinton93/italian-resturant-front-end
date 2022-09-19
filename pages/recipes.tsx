import { addInistialRecipeFavouriteBasket } from "@/components/01-Reducers/resturantSlice";
import CategorieButtons from "@/components/CategorieButtons/CategorieButtons";
import HeroImageBasket from "@/components/HeroImageBasket/HeroImageBasket";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { useGetLocalStorageLikeBasket } from "@/components/libs/useGetLocalStorageLikeBasket";
import RecipeCards from "@/components/RecipeCards/RecipeCards";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5001/recipes");
  const recipes = await res.json();
  return {
    props: {
      recipes,
    }, // will be passed to the page component as props
  };
}

export type recipesTypes = {
  recipeId: number;
  recipeImage: string;
  recipeDiscription: string;
  recipeTitle: string;
  recipeCookTime: number;
  recipeHowTo: string;
  recipeIngridients: string[];
  recipeRatings: number;
  tags: string[];
}[];

export default function recipes({ recipes }: { recipes: recipesTypes }) {
  let [recipeTag, setRecipeTag] = useState("Holiday Recipes");

  let handleClickChooseTag = useCallback(
    (tag: string) => setRecipeTag(tag),
    []
  );

  return (
    <div>
      <Head>
        <title>Bowles - Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroImageBasket />
      <CategorieButtons handleClickChooseTag={handleClickChooseTag} />
      <RecipeCards recipes={recipes} recipeTag={recipeTag} />
      <ImageCarousel />
    </div>
  );
}
