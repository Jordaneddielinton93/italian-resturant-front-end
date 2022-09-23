import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";
import styles from "./styles.module.css";

interface IfooterProps {
  openingDaysTimes: { day: string; time: string }[];
}

export default function Footer({ openingDaysTimes }: IfooterProps) {
  return (
    <Flex
      as="footer"
      data-testid="Footer"
      className={styles.container}
      h="270px"
      w={"100%"}
      justifyContent="space-evenly"
      alignItems={"center"}
      pb="40px"
      bg="#353643"
      pos={"relative"}
      borderBottomLeftRadius="20px"
      borderBottomRightRadius="20px"
    >
      <Image
        display={["none", "block", "block", "block"]}
        src="/images/Misc/logo.png"
        alt="footer logo"
        height="48px"
        width="76px"
      />
      <Box as="section" color={"white"} zIndex="2">
        <h4>Opening Times</h4>

        {openingDaysTimes.map(
          ({ day, time }: { day: string; time: string }) => {
            return (
              <Text
                as={"p"}
                fontSize={["10px", "14px", "14px", "14px"]}
                key={day}
              >
                {day} --------- {time}
              </Text>
            );
          }
        )}
      </Box>
      <Flex
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems={"flex-end"}
        w={["120px", "182px", "182px", "182px"]}
        h={["175px", "125px", "125px", "125px"]}
        zIndex="2"
      >
        <Image
          border={"solid thin white"}
          src={"/images/Footer/FoodImg.png"}
          width={["50px", "55px", "55px", "55px"]}
          height={["50px", "55px", "55px", "55px"]}
          alt="food_imgs"
        />
        <Image
          border={"solid thin white"}
          src={"/images/Footer/FoodImg.png"}
          width={["50px", "55px", "55px", "55px"]}
          height={["50px", "55px", "55px", "55px"]}
          alt="food_imgs"
        />
        <Image
          border={"solid thin white"}
          src={"/images/Footer/FoodImg.png"}
          width={["50px", "55px", "55px", "55px"]}
          height={["50px", "55px", "55px", "55px"]}
          alt="food_imgs"
        />
        <Image
          border={"solid thin white"}
          src={"/images/Footer/FoodImg.png"}
          width={["50px", "55px", "55px", "55px"]}
          height={["50px", "55px", "55px", "55px"]}
          alt="food_imgs"
        />
        <Image
          border={"solid thin white"}
          src={"/images/Footer/FoodImg.png"}
          width={["50px", "55px", "55px", "55px"]}
          height={["50px", "55px", "55px", "55px"]}
          alt="food_imgs"
        />
        <Image
          border={"solid thin white"}
          src={"/images/Footer/FoodImg.png"}
          width={["50px", "55px", "55px", "55px"]}
          height={["50px", "55px", "55px", "55px"]}
          alt="food_imgs"
        />
      </Flex>
      <div className={styles.container_bottomIMG}></div>
    </Flex>
  );
}
