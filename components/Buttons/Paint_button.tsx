import React from "react";
import { chakra } from "@chakra-ui/react";

type Props = {};

export default function Paint_button(props: Props) {
  return (
    <chakra.button
      w={"171px"}
      h="55px"
      bgImage={"/images/Misc/paint_button.png"}
      color="white"
      fontWeight={"bold"}
    >
      See Our Menu
    </chakra.button>
  );
}
