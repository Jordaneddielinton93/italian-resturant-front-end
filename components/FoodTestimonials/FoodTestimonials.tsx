import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import { chakra } from "@chakra-ui/react";

type Props = {};

export default function FoodTestimonials({}: Props) {
  return (
    <Flex
      as={"section"}
      h="360px"
      w="100%"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      flexDir={"column"}
    >
      <Heading
        as={"h2"}
        w="80%"
        textAlign={"center"}
        fontSize={["1.2rem", "1.5rem", "1.5rem", "1.5rem"]}
        pos={"absolute"}
        top="0"
      >
        Dont Just Take our Word for it
      </Heading>
      <Text
        as="p"
        textAlign={"center"}
        fontSize={["0.8rem", "1rem", "1rem", "1rem"]}
        pos={"absolute"}
        top="50px"
      >
        A wide range of chef’s prefer our service then leading companies
      </Text>
      <HeroCarousel isHeroSection={false} />
    </Flex>
  );
}
