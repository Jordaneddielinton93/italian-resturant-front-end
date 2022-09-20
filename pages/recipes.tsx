import CategorieButtons from "@/components/CategorieButtons/CategorieButtons";
import HeroImageBasket from "@/components/HeroImageBasket/HeroImageBasket";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import RecipeCards from "@/components/RecipeCards/RecipeCards";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import { server } from "../config/index.js";

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/cookingrecipes`);
  const data = await res.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export type recipesTypes = {
  recipeid: number;
  recipeimage: string;
  recipediscription: string;
  recipetitle: string;
  recipecooktime: number;
  recipehowto: string;
  recipeingridients: string[];
  reciperatings: number;
  tags: string[];
}[];

export default function recipes({ data }: { data: recipesTypes }) {
  let [recipeTag, setRecipeTag] = useState("");
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
      <RecipeCards recipes={data} recipeTag={recipeTag} />
      <ImageCarousel />
    </div>
  );
}
