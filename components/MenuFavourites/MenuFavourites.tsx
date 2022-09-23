import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function MenuFavourites({}: Props) {
  return (
    <Flex
      display={["none", "column", "column", "column"]}
      justifySelf="flex-start"
      minH={"215px"}
      w={["100%", "100%", "230px", "230px"]}
      bg={"black"}
    >
      <Heading
        as={"h3"}
        fontSize="20px"
        textAlign={"center"}
        w="100%"
        m={"10px 0px"}
        color="white"
      >
        YourFavourites
      </Heading>
    </Flex>
  );
}
