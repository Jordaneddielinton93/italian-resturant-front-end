import React from "react";
import { chakra, Flex, Text } from "@chakra-ui/react";

type Props = {
  icon: any;
  heading: string;
  description: string;
  bgGradient: string;
};

export default function BoxAim({
  icon,
  heading,
  description,
  bgGradient,
}: Props) {
  return (
    <Flex
      p={"20px 0px"}
      flexDir={"column"}
      alignItems="center"
      justifyContent={"space-evenly"}
      w={["278px", "278px", "178px", "178px"]}
      h={["140px", "140px", "178px", "178px"]}
      bgGradient={bgGradient}
      boxShadow={
        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
      }
    >
      {icon}
      <chakra.h3>{heading}</chakra.h3>
      <Text w={"100%"} fontSize="12px" textAlign={"center"}>
        {description}
      </Text>
    </Flex>
  );
}
