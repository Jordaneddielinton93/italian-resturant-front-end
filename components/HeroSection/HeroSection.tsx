import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import React from "react";

import { chakra } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import { useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
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
    : `${spin} infinite 50s linear alternate`;

  return (
    <Box
      as="main"
      width="100%"
      height={["775px", "775px", "620px", "620px"]}
      display="flex"
      justifyContent={["flex-start", "flex-start", "center", "space-evenly"]}
      alignItems={["center", "center", "flex-start", "flex-start"]}
      pos="relative"
      flexDir={["column", "column", "row", "row"]}

      // overflowX="hidden"
    >
      <Box
        as="section"
        display="flex"
        flexDir="row"
        flexDirection="column"
        justifyContent={isLargerThan390 ? "space-evenly" : "space-between"}
        h={isLargerThan390 ? "350px" : "170px"}
        margin={isLargerThan390 ? "60px 0 0 0" : "20px"}
        zIndex="1"
        overflowX="hidden"
      >
        <chakra.h1
          fontSize={["39px", "39px", "2.9rem", "2.9rem"]}
          w={["300px", "361px", "361px", "361px"]}
          fontWeight="semibold"
        >
          Quick meals to your door
        </chakra.h1>

        <chakra.p
          display={["none", "none", "block", "block"]}
          color={"brand.Paragraph"}
          w="361px"
        >
          Fresh and tasty sea food all made with the most exotic flavours!.
        </chakra.p>

        <chakra.h4
          display={["none", "none", "block", "block"]}
          fontSize="20px"
          fontWeight="light"
        >
          Try Our new Salad
        </chakra.h4>
        <Link href="/recipes">
          <chakra.button
            _hover={{ bg: "brand.green.200" }}
            h="48px"
            w="150px"
            bg="black"
            color="white"
            borderRadius="30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="0px 10px 0px 5px"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            overflow="hidden"
          >
            <Image
              src="/images/Hero/bowl-icon.png"
              alt="bowl-icon"
              width="42px"
              height="42px"
            />{" "}
            Order Now
          </chakra.button>
        </Link>
      </Box>
      <chakra.span zIndex="2">
        <Box as="span" zIndex="1" borderRadius="100%">
          <Image
            animation={isHomePage ? animation : ""}
            src={
              isHomePage
                ? "/images/Hero/bowl.png"
                : "/images/Hero/chef-cutout.png"
            }
            alt={isHomePage ? "bowl icon" : "chef icon"}
            width={["300px", "390px", "390px", "390px"]}
            height={["300px", "390px", "390px", "390px"]}
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
        zIndex="0"
        overflow="visible"
      >
        <Image
          src="/images/Hero/graniteBg.png"
          alt="granite kitchen top"
          height="620px"
          width="367px"
        />
      </Box>
    </Box>
  );
}
