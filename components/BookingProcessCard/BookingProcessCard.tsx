import React, { ReactElement } from "react";
import { BookingProcessArr } from "../constants/constants";
import { Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Flex } from "@chakra-ui/react";

type CardProps = {
  icon: ReactElement<any, any>;
  title: string;
  isBookingStage: boolean;
  hasAnimation: boolean;
};

const changeGraide = keyframes`
from {
    background-color: #00E26C;
  }
  to {
    background-color: #008000;
  }

`;
export default function BookingProcessCard({
  icon,
  title,
  isBookingStage,
  hasAnimation,
}: CardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${changeGraide} infinite 2s alternate`;
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
      bg={isBookingStage ? "brand.green.100" : "brand.grey.100"}
      border={`solid 1px ${isBookingStage ? "#008000" : "#EF3A48"}`}
      borderRadius="3px"
      color={"black"}
      flexDirection={["column", "row", "row", "row"]}
      textAlign="center"
    >
      <chakra.span fontSize={["20px", "12px", "16px", "16px"]}>
        {icon}
      </chakra.span>
      {title}
    </Flex>
  );
}
