import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { chakra } from "@chakra-ui/react";

type Props = {
  bg: string[];
  png: string;
  foodName: string;
  foodPrice: number;
};

export default function CarouselCard({ bg, png, foodName, foodPrice }: Props) {
  return (
    <Box
      m={["0px 5px", "0px 10px", "0px 10px", "0px 60px"]}
      minW="100px"
      maxW={"150px"}
      maxH="150px"
      h="150px"
      bgGradient={`linear(to-l, ${bg[0]}, ${bg[1]})`}
      _hover={{
        bgGradient: `linear(to-b, brand.green.100, brand.green.100)`,
        transition: "1s",
      }}
      borderRadius="37px"
      border="solid 2px white"
      display="flex"
      flexDir="column"
      justifyContent={"space-evenly"}
      alignItems="center"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
    >
      <Box width="72px" height="72px" marginLeft={"5px"}>
        <Image
          src={"/images/Hero" + png}
          alt="bowl icon"
          width="72px"
          height="72px"
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
      </Box>
      <chakra.h5 textShadow=" 3px 3px 2px grey;">{foodName}</chakra.h5>
      <chakra.h5 textShadow=" 3px 3px 2px grey;">${foodPrice}</chakra.h5>
    </Box>
  );
}
