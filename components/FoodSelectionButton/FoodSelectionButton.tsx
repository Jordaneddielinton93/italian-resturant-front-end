import { chakra } from "@chakra-ui/react";
import Image from "next/image";

import React from "react";

type Props = {
  title: string;
  iconColor: string;
  bgGradient: string;
  borderRadius: string;
};

export default function FoodSelectionButton({
  title,
  iconColor,
  bgGradient,
  borderRadius,
}: Props) {
  return (
    <chakra.button
      _hover={{ border: "solid 3px black" }}
      cursor="pointer"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius={borderRadius}
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      bgGradient={bgGradient}
      w={["150px", "200px", "200px", "200px"]}
      h="60px"
      margin={["0px 2px", "0px 2px", "0", "0"]}
    >
      <Image
        style={{ color: iconColor }}
        src={"/images/FoodSelection/codechef.svg"}
        alt="chef icon"
        width="43px"
        height="43px"
      />
      {title}
    </chakra.button>
  );
}
