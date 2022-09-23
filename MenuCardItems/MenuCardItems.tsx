import { addMenuRecipeIdAndAmount } from "@/components/01-Reducers/resturantSlice";
import FoodMealsCard from "@/components/FoodMealsCard/FoodMealsCard";
import getSpecificCard from "@/components/getSpecificCard/getSpecificCard";
import MenuItemModel from "@/components/Modals/MenuItemModal";

import { recipesTypes } from "@/pages/recipes";
import { Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

export default function MenuCardItems({ recipes }: { recipes: recipesTypes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let counter = 0;
  const checkColorIsItalianColor = () => {
    counter++;
    if (counter == 4) counter = 1;
    if (counter == 1) return "#01BC5A";
    if (counter == 2) return "#F2F2F2";
    if (counter == 3) return "#EE3B48";
  };

  // ^^ handles what modal card info is shown ,inistial default set to random card
  let [cardModalInfo, setCardModalInfo] = useState(getSpecificCard(recipes, 0));

  // ^^ handles what modal card info is shown ,inistial default set to random card
  const handleClick = (recipeId: any) => {
    setCardModalInfo(getSpecificCard(recipes, recipeId));
    onOpen();
  };
  return (
    <Flex
      mt={"20px"}
      flexWrap="wrap"
      gap={"20px 0"}
      maxH="640px"
      overflow={"scroll"}
      justifyContent="space-evenly"
    >
      {recipes
        ? recipes.map(
            ({ recipetitle, tags, recipeid, reciperatings, recipeimage }) => {
              return (
                <FoodMealsCard
                  handleCardClick={() => handleClick(recipeid)}
                  key={recipeid}
                  image={recipeimage}
                  rating={reciperatings}
                  title={recipetitle}
                  borderColor={checkColorIsItalianColor()}
                  tags={tags}
                  // recipeRating={1}
                  price={2}
                />
              );
            }
          )
        : ""}
      <MenuItemModel
        isOpen={isOpen}
        onClose={onClose}
        cardModalInfo={cardModalInfo}
      />
    </Flex>
  );
}
