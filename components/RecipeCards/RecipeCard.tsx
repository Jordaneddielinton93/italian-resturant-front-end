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
  Img: string;
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
      onClick={handleClick}
      w={"196px"}
      h={"257px"}
      pos={"relative"}
      flexDir={"column"}
      justifyContent="space-between"
      boxShadow={" rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      cursor="pointer"
      _hover={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;",
        bg: "#DDE5E9",
      }}
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
        maxWidth={"196px"}
        maxH="100px"
        overflow={"hidden"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Image
          className={style.image}
          src={
            Img
              ? Img
              : "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt={Alt}
        />
      </Flex>

      <Text
        as={"h3"}
        fontSize="13px"
        fontWeight={"semibold"}
        w="100%"
        padding={"0px 8px"}
      >
        {Title.slice(0, 50)} ...
      </Text>
      <Text
        as={"p"}
        fontSize="10px"
        // h={"50px"}
        overflowY={"hidden"}
        color={"#A09FA2"}
        padding={"0px 8px"}
      >
        {Discription.slice(0, 50)}... <chakra.span>click for more</chakra.span>
      </Text>
      <Flex
        alignItems="center"
        justifyContent={"space-between"}
        minH={"40px"}
        w="100%"
        pos={"relative"}
        borderTop="solid thin black"
      >
        <Flex alignItems={"center"} marginLeft={"10px"}>
          <TimeIcon />
          <Text ml={"5px"} as={"p"} fontSize="10px">
            {Timer}mins
          </Text>
        </Flex>
        <StarRatings rating={Rating} left="120px" bottom="" />
      </Flex>
    </Flex>
  );
}
