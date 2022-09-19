import { Box } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FoodSelectionSection from "../FoodSelectionSection/FoodSelectionSection";

type Props = {};

export default function FoodSelection({}: Props) {
  return (
    <Box
      as="main"
      h="510px"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <FoodSelectionSection
        flip={false}
        mainHeading="Food Menu"
        greenTitle="breakfast"
        whiteTitle="Lunch"
        redTitle="Dinner"
      />

      <chakra.section
        m="20px 20px"
        paddingBottom="80px"
        // display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-evenly"
        h="100%"
        display={["none", "none", "flex", "flex"]}
      >
        <chakra.h3>Eat Out or Eat In ?</chakra.h3>
        <Image
          src="/images/FoodSelection/mainplate.png"
          height="230px"
          width="170px"
        />
      </chakra.section>

      <FoodSelectionSection
        flip={true}
        mainHeading="Food Recipes"
        greenTitle="breakfast"
        whiteTitle="Lunch"
        redTitle="Dinner"
      />
      <chakra.span pos="absolute" left="0">
        <Image
          src="/images/FoodSelection/bgGranite.png"
          height="490px"
          width="130px"
        />
      </chakra.span>
    </Box>
  );
}
