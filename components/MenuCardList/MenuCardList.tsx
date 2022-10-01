import React, { memo } from "react";
import FoodMealsCard from "../FoodMealsCard/FoodMealsCard";

type Props = {
  handleClick: (recipeId: number) => void;
  recipeTag: string;
  recipes: Recipes;
};
type Recipes = {
  recipetitle: string;
  tags: string[];
  recipeid: number;
  reciperatings: number;
  recipeimage: string;
}[];

function MenuCardList({ recipes, handleClick, recipeTag }: Props) {
  let counter = 0;
  const checkColorIsItalianColor = () => {
    counter++;
    if (counter == 4) counter = 1;
    if (counter == 1) return "#01BC5A";
    if (counter == 2) return "#F2F2F2";
    if (counter == 3) return "#EE3B48";
  };
  console.log(recipeTag + "here");
  return (
    <>
      {recipes
        ? recipes.map(
            ({ recipetitle, tags, recipeid, reciperatings, recipeimage }) => {
              return (
                (tags.includes(recipeTag) || recipeTag.length == 0) && (
                  <FoodMealsCard
                    handleCardClick={() => handleClick(recipeid)}
                    key={recipeid}
                    image={recipeid}
                    rating={reciperatings}
                    title={recipetitle}
                    borderColor={checkColorIsItalianColor()}
                    tags={tags}
                  />
                )
              );
            }
          )
        : ""}
    </>
  );
}
export default memo(MenuCardList);
