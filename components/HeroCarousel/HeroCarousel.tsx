import { Box, ChakraProvider, useMediaQuery, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import CarouselCard from "./CarouselCard";
import {
  FoodCarouselItems,
  FoodCarouselUserItems,
} from "../constants/constants";
import CarouselUser from "./CarouselUser";

type Props = {
  isHeroSection: boolean;
};

export default function HeroCarousel({ isHeroSection }: Props) {
  const [isLargerThan390px] = useMediaQuery("(min-width: 500px)");

  let [pos, setPos] = useState<number>(-27.5);
  let [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      let syncToggle = toggle;
      if (pos > 60 || pos < -60) {
        setToggle(!toggle);
        syncToggle = !syncToggle;
      }

      setPos(syncToggle ? (pos += 15) : (pos -= 15));
    }, 5000);

    return () => {
      clearTimeout(timer1);
    };
  }, [pos, toggle]);

  return (
    <Box
      w={isLargerThan390px ? "95%" : "100%"}
      h="175px"
      padding={"4px"}
      sx={{
        backgroundImage:
          isLargerThan390px &&
          "linear-gradient(-43deg, #E33845  30%, #04EF74 60%)",
        zIndex: 2,
      }}
      m={"0px 20px 0 0"}
      pos="absolute"
      bottom={isHeroSection ? "10" : "static"}
      zIndex="30"
      overflow={"visible"}
      borderRadius={isLargerThan390px ? "20px" : "none"}
    >
      <Box
        as="div"
        h="100%"
        w={"100%"}
        bg={isLargerThan390px ? "black" : "transparent"}
        bgGradient={
          isLargerThan390px
            ? `linear(to-l, ${"#353643"}, ${"#161A1B"})`
            : "transparent"
        }
        sx={{
          backgroundImage: 'url("/images/Hero/graniteBgHoz.png")',
          backgroundSize: "cover",
        }}
        // border={isLargerThan390px ? "solid thick" : "none"}
        // borderColor={"brand.green.100"}
        borderRadius={isLargerThan390px ? "20px" : "none"}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <ArrowLeftIcon
          display={isLargerThan390px ? "block" : "none"}
          data-testid="ArrowLeftIcon"
          onClick={() => setToggle(false)}
          cursor={"pointer"}
          h="44px"
          w="44px"
          color={toggle ? "white" : "brand.green.200"}
        />

        <Box
          w={isLargerThan390px ? "70%" : "100%"}
          h="95%"
          overflow="hidden"
          zIndex="4"
        >
          <Box
            data-testid="slider"
            transform={isLargerThan390px ? `translate(${pos}%,0)` : ""}
            transition="5s"
            transitionTimingFunction="linear"
            w="100%"
            h="100%"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            {isHeroSection
              ? FoodCarouselItems.map(
                  ({ png, bg, foodName, foodPrice }, index) => {
                    return (
                      (isLargerThan390px || index < 3) && (
                        <CarouselCard
                          key={index}
                          png={png}
                          bg={bg}
                          foodName={foodName}
                          foodPrice={foodPrice}
                        />
                      )
                    );
                  }
                )
              : FoodCarouselUserItems.map(({ png, bg }, index) => {
                  return (
                    (isLargerThan390px || index < 3) && (
                      <CarouselUser key={index} png={png} bg={bg} />
                    )
                  );
                })}
          </Box>
        </Box>

        <ArrowRightIcon
          display={isLargerThan390px ? "block" : "none"}
          onClick={() => setToggle(true)}
          cursor={"pointer"}
          color={toggle ? "brand.green.200" : "white"}
          h="44px"
          w="44px"
          zIndex={1}
          data-testid="ArrowRightIcon"
        />

        {!isLargerThan390px && (
          <chakra.span
            pos="absolute"
            w="100%"
            h="107px"
            bgColor="#353643"
            zIndex="1"
            bottom="0"
            borderRadius="15px"
          ></chakra.span>
        )}
      </Box>
    </Box>
  );
}
