import React from "react";
import { Box, chakra, Flex, Image, Text } from "@chakra-ui/react";
import BoxAim from "../BoxAim/BoxAim";
import {
  GiBananaPeeled,
  GiFruitBowl,
  GiHamburger,
  GiHomeGarage,
} from "react-icons/gi";

let BoxAimList = [
  {
    icon: <GiHamburger fontSize={"38px"} />,
    heading: "Priority",
    description:
      "All ingredients made from our home recipes passed down from generations",
    bgGradient: `linear(to-r, ${"#C6F6D5"}, ${"#C6F6D5"})`,
  },
  {
    icon: <GiFruitBowl fontSize={"38px"} />,
    heading: "Healthy",
    description:
      "We make all our meals with the finest and freshest ingredients",
    bgGradient: `linear(to-r, ${"#C6F6D5"}, ${"white"})`,
  },
  {
    icon: <GiBananaPeeled fontSize={"38px"} />,
    heading: "Tasty",
    description:
      "We do not sacrifice any taste for our high range meals , prepped for you",
    bgGradient: `linear(to-r, ${"white"}, ${"#FED7D7"})`,
  },
  {
    icon: <GiHomeGarage fontSize={"38px"} />,
    heading: "Home",
    description:
      "We make it our utmost priority to give you the best taste and health in all meals",
    bgGradient: `linear(to-r, ${"#FED7D7"}, ${"#FED7D7"})`,
  },
];

type Props = {};

export default function OurAim({}: Props) {
  return (
    <Flex
      as="section"
      h={["842px", "842px", "442px", "442px"]}
      w="100%"
      justifyContent="space-evenly"
      alignItems={"center"}
      flexDir={"column"}
    >
      <Flex
        h={"100px"}
        flexDir="column"
        justifyContent={"space-between"}
        textAlign="center"
      >
        <chakra.h5 fontSize={"16px"}>Our Aim</chakra.h5>
        <chakra.h3 fontSize={"20px"} fontWeight="light">
          Bridging the food gap{" "}
        </chakra.h3>
        <Text fontSize={"14px"} color="#A7A6A7" w={"325px"} textAlign="center">
          Helping any and everyone make tasty orginal food just like Mama’s
          italian cooking{" "}
        </Text>
      </Flex>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"space-evenly"}
        alignItems="center"
        w="100%"
        maxW={"830px"}
      >
        {BoxAimList.map(({ icon, heading, description, bgGradient }) => {
          return (
            <BoxAim
              key={heading}
              icon={icon}
              heading={heading}
              description={description}
              bgGradient={bgGradient}
            />
          );
        })}
      </Flex>
      <chakra.span
        pos="absolute"
        left="0"
        display={["none", "none", "none", "block"]}
      >
        <Image
          transform={""}
          src="/images/FoodSelection/bgGranite.png"
          height="438px"
          width="110px"
        />
      </chakra.span>
    </Flex>
  );
}
