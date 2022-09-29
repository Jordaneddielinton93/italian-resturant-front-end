import getSpecificCard from "@/components/getSpecificCard/getSpecificCard";
import MenuItemModel from "@/components/Modals/MenuItemModal";

import { recipesTypes } from "@/pages/recipes";
import { Flex, useDisclosure } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import MenuCardList from "../MenuCardList/MenuCardList";

export default function MenuCardItems({
  recipes,
  recipeTag,
}: {
  recipes: recipesTypes;
  recipeTag: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // ^^ handles what modal card info is shown ,inistial default set to random card
  let [cardModalInfo, setCardModalInfo] = useState(getSpecificCard(recipes, 0));
  // ^^ handles what modal card info is shown ,inistial default set to random card
  let handleClick = useCallback((recipeId: any) => {
    setCardModalInfo(getSpecificCard(recipes, recipeId));
    onOpen();
  }, []);

  return (
    <Flex
      mt={"20px"}
      flexWrap="wrap"
      gap={"20px 0"}
      maxH="640px"
      overflow={"scroll"}
      justifyContent="space-evenly"
    >
      <MenuCardList
        recipeTag={recipeTag}
        recipes={recipes}
        handleClick={handleClick}
      />
      <MenuItemModel
        isOpen={isOpen}
        onClose={onClose}
        cardModalInfo={cardModalInfo}
      />
    </Flex>
  );
}
