import { Flex, chakra } from "@chakra-ui/react";
import React from "react";

type Props = {
  recipeIngridients: string[];
};

export default function RecipeModelIngridents({ recipeIngridients }: Props) {
  console.log(recipeIngridients);
  return (
    <Flex
      flexDir={"column"}
      minH="200px"
      bg={"white"}
      border={"solid thin black"}
      borderRadius="10px"
      as={"section"}
      p="20px"
      mt={"10px"}
    >
      <chakra.h3 fontSize={"24px"} fontWeight="semibold">
        Ingridents needed
      </chakra.h3>
      {recipeIngridients.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </Flex>
  );
}
