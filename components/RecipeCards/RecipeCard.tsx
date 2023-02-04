import { TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useGetLocalStorageLikeBasket } from "../libs/useGetLocalStorageLikeBasket";
import StarRatings from "../StarRatings/StarRatings";
import style from "./RecipeCard.module.css";

type Props = {
  recipeId: number;
  Img: number;
  Alt: string;
  Title: string;
  Discription: string;
  Timer: number;
  Rating: number;

  handleClick: () => void;
};

export default function RecipeCard({
  Img,
  Alt,
  Title,
  Discription,
  Timer,
  Rating,
  recipeId,
  handleClick,
}: Props) {
  let state = useSelector((state: any) => state.resturant);
  return (
    <Flex
      alignSelf="center"
      padding={"2px"}
      _hover={{
        // bgGradient: "linear(to-l, #CE2B37, #019245)",
        backgroundImage:
          "linear-gradient(-43deg, #CE2B37 0%, #EDF1F4 46%, #019245 100%)",
        // bg: "#DDE5E9",
      }}
      mt={"50px"}
      borderRadius="5px"
    >
      <Flex
        onClick={handleClick}
        w={"246px"}
        h={"400px"}
        overflow="hidden"
        pos={"relative"}
        flexDir={"column"}
        justifyContent="space-between"
        boxShadow={" rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        cursor="pointer"
        borderRadius={"3px"}
        border="thin solid rgba(0, 0, 0, 0)"
        _hover={{
          bg: "#DDE5E9",
        }}
        bg="white"
      >
        <AiFillHeart
          className={style.heartIcon}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            color: state.likeBasket.includes(recipeId) ? "red" : "black",
          }}
        />
        <Flex
          alignSelf="center"
          padding={"2px"}
          bgGradient="linear(to-l, #CE2B37, #019245)"
          mt={"50px"}
          borderRadius="5px"
        >
          <Flex
            maxWidth={"206px"}
            maxH="200px"
            minH="200px"
            overflow={"hidden"}
            justifyContent="center"
            alignItems={"center"}
            bgColor="#E6EAED"
          >
            <Image
              className={style.image}
              objectFit="cover"
              src={
                Img < 11
                  ? `/images/Recipes/recipie-id-${Img}.png`
                  : "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt={Alt}
            />
          </Flex>
        </Flex>
        <Text
          as={"h3"}
          fontSize="13px"
          fontWeight={"semibold"}
          w="100%"
          padding={"0px 20px"}
        >
          {Title.slice(0, 50)} ...
        </Text>

        <Text
          as={"p"}
          fontSize="10px"
          // h={"50px"}
          overflowY={"hidden"}
          color={"#A09FA2"}
          padding={"0px 20px"}
        >
          {Discription.slice(0, 50)}...{" "}
          <chakra.span>click for more</chakra.span>
        </Text>
        <Flex
          alignItems="center"
          justifyContent={"space-between"}
          minH={"40px"}
          w="206px"
          pos={"relative"}
          borderTop="solid thin black"
          alignSelf={"center"}
        >
          <Flex alignItems={"center"} marginLeft={"0px"}>
            <TimeIcon />
            <Text ml={"5px"} as={"p"} fontSize="10px">
              {Timer}mins
            </Text>
          </Flex>
          <StarRatings rating={Rating} left="140px" bottom="" />
        </Flex>
      </Flex>
    </Flex>
  );
}
