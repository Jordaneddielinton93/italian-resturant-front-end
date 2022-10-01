import { recipesTypes } from "@/pages/recipes";
import { Flex, chakra, useDisclosure, Button, Heading } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import getSpecificCard from "../getSpecificCard/getSpecificCard";
import SizeModel from "../Modals/SizeModel";
import RecipeCard from "./RecipeCard";

function RecipeCards(recipes: { recipes: recipesTypes; recipeTag: string }) {
  let recipeTag = recipes.recipeTag;
  let randomRecipeId = Math.floor(Math.random() * recipes.recipes.length);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let [cardModalInfo, setCardModalInfo] = useState(
    getSpecificCard(recipes.recipes, randomRecipeId)
  );

  // ^^ handles what modal card info is shown ,inistial default set to random card
  const handleClick = (recipeId: any) => {
    setCardModalInfo(getSpecificCard(recipes.recipes, recipeId));
    onOpen();
  };
  return (
    <Flex minH={"350px"} w="95%" margin={"0 auto"} flexDir="column">
      <Button
        onClick={() => handleClick(randomRecipeId)}
        m={4}
      >{`Suggested Recipes for You`}</Button>
      <Heading textAlign={"center"}>
        {recipeTag.length == 0 ? "Show All Recipes" : "Show " + recipeTag}
      </Heading>
      <chakra.h3 h={"40px"} fontWeight={"bold"}></chakra.h3>
      <Flex as={"ul"} flexWrap="wrap" gap={"20px"} justifyContent="center">
        {recipes.recipes.map(
          ({
            recipeid,
            recipetitle,
            recipediscription,

            recipecooktime,

            reciperatings,
            tags,
          }) => {
            return (
              (tags.includes(recipeTag) || recipeTag.length == 0) && (
                <RecipeCard
                  key={recipeid}
                  recipeId={recipeid}
                  handleClick={() => handleClick(recipeid)}
                  Img={recipeid}
                  Alt={recipetitle}
                  Title={recipetitle}
                  Discription={recipediscription}
                  Timer={recipecooktime}
                  Rating={reciperatings}
                />
              )
            );
          }
        )}
      </Flex>
      <SizeModel
        cardModalInfo={cardModalInfo}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
}
export default memo(RecipeCards);
