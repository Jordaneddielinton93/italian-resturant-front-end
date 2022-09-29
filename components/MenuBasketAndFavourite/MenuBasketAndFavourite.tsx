import { recipesTypes } from "@/pages/recipes";
import { Flex } from "@chakra-ui/react";
import React from "react";
import MenuBasket from "../MenuBasket/MenuBasket";
import MenuFavourites from "../MenuFavourites/MenuFavourites";

type Props = {};

export default function MenuBasketAndFavourite({ recipes }: any) {
  return (
    <Flex
      width={["250px", "450px", "230px", "230px"]}
      flexDir="column"
      alignSelf={"center"}
    >
      <MenuBasket recipes={recipes} />
      <MenuFavourites />
    </Flex>
  );
}
