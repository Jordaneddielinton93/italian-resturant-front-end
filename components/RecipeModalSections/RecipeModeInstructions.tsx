import { Flex, chakra, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  recipeHowTo: string;
};

export default function RecipeModeInstructions({ recipeHowTo }: Props) {
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
        How To Instructions
      </chakra.h3>
      <Text as={"p"}>{recipeHowTo}</Text>
    </Flex>
  );
}
