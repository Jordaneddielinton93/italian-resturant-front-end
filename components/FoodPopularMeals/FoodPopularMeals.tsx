import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

import React from "react";
// import { FaConciergeBell } from "react-icons/fa";
import FoodMealsCard from "../FoodMealsCard/FoodMealsCard";

type Props = {};

export default function FoodPopularMeals({}: Props) {
  return (
    <Flex
      flexDir={"column"}
      w="100%"
      h={["550px", "550px", "750px", "750px"]}
      pos="relative"
      alignItems={"center"}
      overflow="hidden"
    >
      <Flex
        as={"section"}
        h="180px"
        w={"100%"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Image src="/images/Misc/bellicon.svg" height="60px" width="60px" />
        <Heading as={"h3"} fontWeight="light">
          Most Popular Meals
        </Heading>
        <Text fontWeight={"semibold"} color={"brand.red.100"}>
          {" "}
          Tasty fast meals
        </Text>
      </Flex>

      <Flex
        as={"section"}
        justifyContent={"space-evenly"}
        width={["100%", "100%", "850px", "850px"]}
        h={["340px", "340px", "540px", "540px"]}
        flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
        overflowX={["scroll", "scroll", "initial", "initial"]}
      >
        <FoodMealsCard
          handleCardClick={() => ""}
          rating={4}
          title="Chicken Roast Beef"
          borderColor="#01BC5A"
          tags={["Meats", "Vegitarian", "Special"]}
          price={2}
        />
        <FoodMealsCard
          handleCardClick={() => ""}
          rating={3}
          title="Chicken Roast Beef"
          borderColor="white"
          tags={["vegan", "Vegitarian"]}
          price={3}
        />
        <FoodMealsCard
          handleCardClick={() => ""}
          rating={4}
          title="Chicken Roast Beef"
          borderColor="#EE3B48"
          tags={["Pudding", "Extras"]}
          price={2}
        />
        <FoodMealsCard
          handleCardClick={() => ""}
          rating={2}
          title="Chicken Roast Beef"
          borderColor="#01BC5A"
          tags={["Meats", "Vegitarian", "Special"]}
          price={3}
        />
        <FoodMealsCard
          handleCardClick={() => ""}
          rating={4}
          title="Chicken Roast Beef"
          borderColor="white"
          tags={["vegan", "Vegitarian"]}
          price={45}
        />
        <FoodMealsCard
          handleCardClick={() => ""}
          rating={2}
          title="Chicken Roast Beef"
          borderColor="#EE3B48"
          tags={["Pudding", "Extras"]}
          price={2}
        />
      </Flex>

      <chakra.span
        pos="absolute"
        left="0"
        top={"50px"}
        display={["none", "none", "block", "block"]}
      >
        <Image
          src="/images/FoodSelection/bgGranite.png"
          height="660px"
          width="200px"
        />
      </chakra.span>
    </Flex>
  );
}
