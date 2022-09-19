import { Box, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {
  bg: string[];
  png: string;
};

export default function CarouselUser({ bg, png }: Props) {
  return (
    <Box
      m={["0px 5px", "0px 10px", "0px 10px", "0px 30px"]}
      minW="106"
      maxW={"106"}
      maxH="106px"
      h="106px"
      bgGradient={`linear(to-l, ${bg[0]}, ${bg[1]})`}
      cursor="context-menu"
      _hover={{
        bgGradient: `linear(to-b, ${bg[1]}, purple)`,
        transition: "1s",
      }}
      borderRadius="100%"
      border="solid 2px white"
      display="flex"
      flexDir="column"
      justifyContent={"space-evenly"}
      alignItems="center"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
      transition="2s"
    >
      <Box
        pos={"absolute"}
        width="110px"
        height="110px"
        borderRadius="100%"
        border="solid 3px white"
        zIndex={"1"}
      ></Box>
      <Box width="100px" height="100px" marginLeft={"5px"} overflow="visible">
        <Image
          src={"/images/Hero" + png}
          alt="bowl icon"
          width="92px"
          height="106px"
          style={{ maxWidth: "92px", maxHeight: "106px" }}
        />
      </Box>
    </Box>
  );
}
