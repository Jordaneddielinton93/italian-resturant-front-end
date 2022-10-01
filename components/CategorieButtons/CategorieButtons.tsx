import { Flex, chakra, useMediaQuery } from "@chakra-ui/react";
import React, { memo, ReactElement } from "react";
import {
  GiAlarmClock,
  GiBarbecue,
  GiCoffeeCup,
  GiCupcake,
  GiLindenLeaf,
  GiPopcorn,
  GiPresent,
  GiRoastChicken,
} from "react-icons/gi";

interface IiconsAndTitle {
  icon: ReactElement | string;
  title: string;
}

let iconsAndTitles: IiconsAndTitle[] = [
  { icon: "All", title: "" },
  { icon: <GiPopcorn />, title: "Appetizers & Snacks" },
  { icon: <GiCupcake />, title: "Baking Recipes" },
  { icon: <GiBarbecue />, title: "Barbeque & Grilling" },
  { icon: <GiCoffeeCup />, title: "Breakfast & Brunch" },
  { icon: <GiPresent />, title: "Holiday Recipes" },
  { icon: <GiAlarmClock />, title: "Quick & easy" },
  { icon: <GiLindenLeaf />, title: "Healthy Meals" },
];

function CategorieButtons({
  recipeTag,
  handleClickChooseTag,
}: {
  handleClickChooseTag: any;
  recipeTag: string;
}) {
  const [isLargerThan390] = useMediaQuery("(min-width: 480px)");
  return (
    <Flex
      h={"130px"}
      width="100%"
      flexDir={"column"}
      w="95%"
      margin={"0px auto"}
      justifyContent="center"
    >
      <Flex justifyContent={"space-between"}>
        {iconsAndTitles.map(({ icon, title }, index) => {
          return isLargerThan390 || index < 4 ? (
            <Flex
              onClick={() => handleClickChooseTag(title)}
              key={title}
              w={["80px", "55px", "90px", "90px"]}
              h={["80px", "55px", "90px", "90px"]}
              flexDir={"column"}
              border={`solid 2px ${recipeTag == title ? "red" : "#ECECF0"}`}
              alignItems="center"
              justifyContent={"center"}
              fontSize={["22px", "22px", "22px", "22px"]}
              p={"2px"}
              marginTop={"10px"}
              cursor="pointer"
              _hover={{ bg: "#ECECF0", borderColor: `green` }}
            >
              {icon}
              <chakra.h3
                textAlign={"center"}
                fontSize={["8px", "8px", "12px", "12px"]}
              >
                {title}
              </chakra.h3>
            </Flex>
          ) : (
            ""
          );
        })}
      </Flex>
    </Flex>
  );
}
export default CategorieButtons;
