import recipes from "@/pages/recipes";
import { Flex, Image, ModalHeader, Text } from "@chakra-ui/react";
import React from "react";
import LikeRecipeButton from "../Buttons/LikeRecipeButton";

type Props = {
  foodTitle: string;
  foodDiscription: string;
  foodImage: string;
  foodId: number;
};

export default function RecipeModalhero({
  foodTitle,
  foodDiscription,
  foodImage,
  foodId,
}: Props) {
  return (
    <Flex
      bg={"white"}
      flexDir={"column"}
      border={"solid thin black"}
      borderRadius="10px"
      as={"section"}
      p="20px 0"
    >
      <ModalHeader textAlign={"center"} fontWeight="semibold">
        Your Recipe
      </ModalHeader>
      <Flex
        w={"100%"}
        justifyContent="space-evenly"
        flexDir={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Flex
          w={"300px"}
          //   bg={"red"}
          flexDir="column"
          justifyContent={"space-between"}
        >
          <Text as={"h3"} fontSize="20px" fontWeight={"semibold"}>
            {foodTitle}
          </Text>
          <Text
            fontSize={["11px", "16px", "20px", "20px"]}
            minH="170px"
            w={["100%"]}
            overflowY={"scroll"}
          >
            {foodDiscription}
          </Text>
          <Flex w={"100%"} flexDir="column" alignItems={"center"}>
            <LikeRecipeButton recipeId={foodId} />
            {"Add To Favourite "}
          </Flex>
        </Flex>

        <Image
          src={
            foodImage
              ? foodImage
              : "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          objectFit="contain"
          objectPosition={"top"}
          w={"300px"}
          h="300px"
          alt="Food image"
        />
      </Flex>
    </Flex>
  );
}
