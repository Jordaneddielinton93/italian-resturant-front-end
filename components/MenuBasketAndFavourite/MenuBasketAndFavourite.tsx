import { recipesTypes } from "@/pages/recipes";
import { Flex } from "@chakra-ui/react";
import React from "react";
import MenuBasket from "../MenuBasket/MenuBasket";
import MenuFavourites from "../MenuFavourites/MenuFavourites";

type Props = {};

export default function MenuBasketAndFavourite({ recipes }: any) {
  return (
    <Flex
      w={["250px", "450px", "265px", "265px"]}
      minW={["250px", "450px", "265px", "265px"]}
      maxH="640px"
      flexDir="column"
      alignSelf={"flex-start"}
      m="auto"
    >
      <MenuBasket recipes={recipes} />
      <MenuFavourites recipes={recipes} />
    </Flex>
  );
}
