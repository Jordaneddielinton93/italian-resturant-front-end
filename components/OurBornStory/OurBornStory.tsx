import React from "react";
import { Box, Flex, chakra, Text, Image } from "@chakra-ui/react";
import Paint_button from "../Buttons/Paint_button";
import { GiThreeLeaves } from "react-icons/gi";

type Props = {
  image: string;
  dir: string | any;
  imgW: string;
  imgH: string;
  text: string;
  smText: string;
};

export default function OurBornStory({
  image,
  dir,
  imgW,
  imgH,
  text,
  smText,
}: Props) {
  return (
    <Flex
      as={"section"}
      h={["850px", "850px", "550px", "550px"]}
      justifyContent="space-evenly"
      alignItems={"center"}
      m={"50px 0px"}
      flexDir={["column", "column", dir ? dir : "row", dir ? dir : "row"]}
    >
      <Flex
        w={"405px"}
        h={"100%"}
        flexDir="column"
        justifyContent="space-evenly"
      >
        <chakra.h5
          display={"flex"}
          fontSize={"16px"}
          fontWeight="semibold"
          w={"124px"}
          h={"26px"}
          color="#009246"
        >
          Veggie Life <GiThreeLeaves />
        </chakra.h5>
        <chakra.h2 fontSize={"30px"} fontWeight="semibold">
          Our Italian born story
        </chakra.h2>
        <chakra.h3>{smText}</chakra.h3>
        <Text>{text}</Text>
        <Paint_button />
      </Flex>
      <Image maxW={imgW} maxH={imgH} src={image} alt="happy chef" />
    </Flex>
  );
}
