import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = { numb: number };

export default function FoodPopularityCard({ numb }: Props) {
  return (
    <Flex
      h="280px"
      width="185"
      flexDir={"column"}
      align="center"
      justifyContent={"space-evenly"}
      zIndex="1"
    >
      <Image src={`/images/Hero/bowl-icon${numb}.png`} h={"160px"} w="160px" />
      <Heading
        as="h3"
        w={"205px"}
        textAlign="center"
        fontSize={["1rem", "16px", "16px", "16px"]}
      >
        Scrumptious
      </Heading>
      <Text
        as="p"
        w={"205px"}
        textAlign="center"
        color={"#A7A6A7"}
        fontSize="14px"
      >
        Balanced nutrition cheap and cheerfull
      </Text>
    </Flex>
  );
}
