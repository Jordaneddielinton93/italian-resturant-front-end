import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import FoodPopularityCard from "../FoodPopularityCard/FoodPopularityCard";
import { chakra } from "@chakra-ui/react";

type Props = {};

function FoodPopularity({}: Props) {
  return (
    <Flex
      as="main"
      w={"100%"}
      h="530px"
      justifyContent={"flex-start"}
      alignItems="center"
      flexDir={"column"}
      pos="relative"
    >
      <Flex
        h="110px"
        w="100%"
        justifyContent={"space-between"}
        alignItems="center"
        flexDir={"column"}
        textAlign="center"
      >
        <Heading as="h3" fontSize={["1rem", "1.3rem", "1.3rem", "1.3rem"]}>
          Scrumptious
        </Heading>
        <Heading as="h4" fontSize={["1.2rem", "1.5rem", "1.5rem", "1.5rem"]}>
          Food Categories
        </Heading>
        <Text as={"p"}>
          Choose from our selection of categories all made from Mammas mix
        </Text>
      </Flex>

      <Flex
        h="290px"
        w="100%"
        overflowX={["scroll", "scroll", "scroll", "hidden"]}
        justifyContent={"space-evenly"}
      >
        {[5, 6, 7].map((numb) => (
          <FoodPopularityCard key={numb} numb={numb} />
        ))}
      </Flex>
      <chakra.span
        pos="absolute"
        right="0"
        display={["none", "none", "none", "block"]}
      >
        <Image
          transform={"rotate(180deg)"}
          src="/images/FoodSelection/bgGranite.png"
          height="490px"
          width="130px"
        />
      </chakra.span>
    </Flex>
  );
}
export default FoodPopularity;
