import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import StarRatings from "../StarRatings/StarRatings";
import TagBoxs from "../TagBoxs/TagBoxs";

type Props = {
  image: number;
  title: string;
  rating: number;
  borderColor?: any;
  tags: string[];
  handleCardClick: () => void;
};

export default function FoodMealsCard({
  image,
  title,
  rating,

  borderColor,
  tags,
  handleCardClick,
}: Props) {
  return (
    <Flex
      onClick={handleCardClick}
      h="250px"
      w="172px"
      minW={"172px"}
      pos={"relative"}
      zIndex="1"
      m={["0px 40px", "0px 40px", "0px 40px", "0px 40px"]}
      cursor="pointer"
    >
      <TagBoxs tags={tags} borderColor={borderColor} />
      <Box
        pos={"absolute"}
        right="0"
        top="0"
        h="153px"
        w={"153px"}
        border={`outset 5px ${borderColor}`}
        borderRadius={"100%"}
        background="white"
        zIndex={1}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 4px 12px;"
        backgroundImage={
          image < 11
            ? `/images/Recipes/recipie-id-${image}.png`
            : "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        backgroundPosition="center"
        backgroundSize={"cover"}
        backgroundRepeat="no-repeat"
      ></Box>

      <Box
        as="section"
        pos={"absolute"}
        right="7px"
        bottom={0}
        h="198px"
        w="138px"
        bgColor="#EDF1F4"
        borderRadius={"19px"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      ></Box>
      <Text
        as="p"
        width="120px"
        zIndex={"2"}
        pos="absolute"
        bottom={"40px"}
        right="15px"
      >
        {title.slice(0, 20)}
      </Text>
      <StarRatings rating={rating} left="40px" bottom="14px" />
      <Text
        as="p"
        width="120px"
        zIndex={"2"}
        pos="absolute"
        bottom={"8px"}
        right="-70px"
      >
        £{rating}
      </Text>
    </Flex>
  );
}
