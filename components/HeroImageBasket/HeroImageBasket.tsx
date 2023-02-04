import { TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, chakra, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsBasket } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";

type Props = {
  showBasket: boolean;
};

export default function HeroImageBasket({ showBasket }: Props) {
  let state = useSelector((state: any) => state.resturant);
  return (
    <Flex
      h={["210px", "190px", "190px", "190px"]}
      w={showBasket ? "95%" : "100%"}
      margin={"0 auto"}
      justifyContent="space-between"
      flexDir={["column", "row", "row", "row"]}
    >
      <Flex
        w="100%"
        padding={"4px"}
        sx={{
          backgroundImage:
            "linear-gradient(-43deg, #CE2B37 0%, #EDF1F4 46%, #019245 100%)",
        }}
        _hover={{
          backgroundImage:
            "linear-gradient(43deg, #CE2B37 0%, #EDF1F4 46%, #019245 100%)",
        }}
        m={"0px 20px 0 0"}
      >
        <Flex
          flexDir={"column"}
          justifyContent="center"
          paddingLeft={["10px", "50px", "80px", "100px"]}
          bgImage={"/images/Recipes/heroImg.png"}
          bgSize="cover"
          // bgColor={"pink"}
          w="100%"
          minW={"100%"}
          m={"0px 20px 0 0"}
          border="thin solid black"
        >
          <chakra.h4 bg={"white"} w="70px" h={"20px"} textAlign="center">
            Popular
          </chakra.h4>
          <chakra.h3
            fontSize={["16px", "18px", "20px", "24px"]}
            w={["170px", "250px", "300px", "335px"]}
            fontWeight={"semibold"}
          >
            Boiled Eggs with Vegatable Sauce
          </chakra.h3>
          <Flex w="200px" justifyContent={"space-between"} alignItems="center">
            <TimeIcon color={"black"} />

            <chakra.p fontWeight={"semibold"}> 25 mins</chakra.p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        display={showBasket ? "flex" : "none"}
        bg={"#353643"}
        w={["100%", "160px", "160px", "160px"]}
        h={["48%", "100%", "100%", "100%"]}
        flexDir={"column"}
        color="white"
        justifyContent={"center"}
        p="15px"
      >
        <BsBasket fontSize={"24px"} />
        <Text fontSize={"15px"}>
          you have{" "}
          <chakra.span
            data-testid="spanTest"
            color={"red"}
            fontSize="2xl"
            fontWeight={"extrabold"}
          >
            {state.likeBasket.length}
          </chakra.span>{" "}
          item{state.likeBasket.length == 1 ? " " : "s"} in your Favourtes cart
        </Text>
      </Flex>
    </Flex>
  );
}
