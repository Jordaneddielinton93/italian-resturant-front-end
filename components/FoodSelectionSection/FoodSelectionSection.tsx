import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FoodSelectionButton from "../FoodSelectionButton/FoodSelectionButton";

type Props = {
  mainHeading: string;
  greenTitle: string;
  whiteTitle: string;
  redTitle: string;
  flip: boolean;
};

export default function FoodSelectionSection({
  mainHeading,
  greenTitle,
  whiteTitle,
  redTitle,
  flip,
}: Props) {
  return (
    <chakra.section
      zIndex={2}
      display="flex"
      justifyContent="space-evenly"
      flexDir="column"
      h="280px"
      alignItems="center"
    >
      <chakra.h3>{mainHeading}</chakra.h3>
      <FoodSelectionButton
        borderRadius={flip ? "0px 20px 0px 0px" : "20px 0px 0px 0px"}
        title={greenTitle}
        bgGradient={`linear(to-l, brand.green.200,brand.green.100)`}
        iconColor="black"
      />
      <FoodSelectionButton
        borderRadius={flip ? "0px 6px 6px 0px" : "6px 0px 0px 6px"}
        title={whiteTitle}
        bgGradient={`linear(to-l, #F1F1F1,white)`}
        iconColor="black"
      />
      <FoodSelectionButton
        borderRadius={flip ? "0px 0px 20px 0px" : "0px 0px 0px 20px"}
        title={redTitle}
        bgGradient={`linear(to-l, brand.red.200, brand.red.100)`}
        iconColor="white"
      />
    </chakra.section>
  );
}
