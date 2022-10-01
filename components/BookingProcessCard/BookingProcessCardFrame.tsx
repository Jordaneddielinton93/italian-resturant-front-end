import React, { ReactElement } from "react";

import { chakra } from "@chakra-ui/react";

import { Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeMenuStage } from "../01-Reducers/resturantSlice";

type CardProps = {
  icon: ReactElement<any, any> | string;
  title: string;
};

export default function BookingProcessCardFrame({ icon, title }: CardProps) {
  return (
    <Flex
      w={["21vw", "21vw", "21vw", "21vw"]}
      maxW="250px"
      h={["80px", "50px", "50px", "50px"]}
      pl={["0px", "10px", "20px", "20px"]}
      gap={["8px", "8px", "20px", "30px"]}
      fontSize={["12px", "12px", "16px", "16px"]}
      justifyContent={["space-evenly", "start", "start", "start"]}
      alignItems={["center"]}
      bg={"brand.grey.100"}
      border={`solid 1px grey`}
      borderRadius="3px"
      color={"black"}
      flexDirection={["column", "row", "row", "row"]}
      textAlign="center"
      cursor={title == "Menu" ? "pointer" : ""}
    >
      <chakra.span fontSize={["20px", "12px", "16px", "16px"]}>
        {icon}
      </chakra.span>
      {title}
    </Flex>
  );
}
