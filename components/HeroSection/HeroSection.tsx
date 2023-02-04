import {
  Box,
  Flex,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import React from "react";

import { chakra } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { GiImperialCrown } from "react-icons/gi";
import OrderNow_Button from "../Buttons/OrderNow_Button";
const spin = keyframes`
 from{
    transform:rotate(0deg)
 }
 to{
    transform:rotate(180deg)
 }
`;

type Props = {
  isHomePage: boolean;
};

export default function HeroSection({ isHomePage }: Props) {
  const [isLargerThan390] = useMediaQuery("(min-width: 768px)");

  const animation = usePrefersReducedMotion()
    ? undefined
    : `${spin} infinite 120s linear alternate`;

  return (
    <Box
      as="main"
      width="100%"
      height={["775px", "775px", "780px", "780px"]}
      display="flex"
      justifyContent={["flex-start", "flex-start", "center", "space-evenly"]}
      alignItems={["center", "center", "flex-start", "flex-start"]}
      pos="relative"
      flexDir={["column", "column", "row", "row"]}
    >
      <Box
        as="section"
        display="flex"
        flexDir="row"
        flexDirection="column"
        justifyContent={isLargerThan390 ? "space-evenly" : "space-between"}
        h={isLargerThan390 ? "430px" : "180px"}
        margin={isLargerThan390 ? "60px 0 0 0" : "20px"}
        zIndex="1"
        overflowX="hidden"
      >
        <Flex textAlign="center" justifyContent={"center"}>
          <GiImperialCrown fontSize={"4rem"} />
        </Flex>
        <chakra.h1
          fontSize={["39px", "39px", "4.6rem", "4.6rem"]}
          w={["300px", "361px", "400px", "400px"]}
          fontWeight="bold"
          fontFamily={"Great Vibes"}
          textAlign="center"
          fontStyle={"italic"}
          textShadow=" 7px 7px rgba(0,128,0,0.2)
          
          "
        >
          Quick meals to your door
        </chakra.h1>

        <chakra.p
          display={["none", "none", "block", "block"]}
          color={"brand.Paragraph"}
          w="361px"
          textAlign="center"
          alignSelf={"center"}
        >
          Fresh and tasty sea food all made with the most exotic flavours!.
        </chakra.p>

        <chakra.h4
          display={["none", "none", "block", "block"]}
          fontSize="20px"
          fontWeight="light"
          textAlign="center"
        >
          Try Our new Salad
        </chakra.h4>

        <OrderNow_Button />
      </Box>
      <chakra.span zIndex="1">
        <Box as="span" borderRadius="100%">
          <Image
            animation={isHomePage ? animation : ""}
            src={
              isHomePage
                ? "/images/Hero/bowl2.png"
                : "/images/Hero/chef-cutout.png"
            }
            alt={isHomePage ? "bowl icon" : "chef icon"}
            width={["300px", "390px", "340px", "450px"]}
            height={["300px", "390px", "340px", "450px"]}
          />
        </Box>
      </chakra.span>
      <HeroCarousel isHeroSection={true} />

      <Box
        display={isLargerThan390 ? "block" : "none"}
        as="span"
        position="absolute"
        right="0"
        top="-90px"
        overflow="visible"
      >
        <Image
          src="/images/Hero/graniteBg.png"
          alt="granite kitchen top"
          height="750px"
          width="367px"
        />
      </Box>
    </Box>
  );
}
