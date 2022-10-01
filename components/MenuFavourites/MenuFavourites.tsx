import { recipesTypes } from "@/pages/recipes";
import { Flex, Heading, chakra, Image } from "@chakra-ui/react";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCards/RecipeCard";

type Props = {};
// recipesTypes
function MenuFavourites({ recipes }: any) {
  let { likeBasket } = useSelector((state: any) => state.resturant);
  return (
    <Flex
      flexDir={"column"}
      justifySelf="flex-start"
      minH={"215px"}
      w={["100%", "100%", "230px", "230px"]}
      bg={"#353643"}
      zIndex="10"
      p={"5px 0"}
      overflowY="scroll"
    >
      <Heading
        as={"h3"}
        fontSize="20px"
        textAlign={"center"}
        w="100%"
        m={"10px 0px"}
        color="white"
      >
        YourFavourites
      </Heading>
      <chakra.ul
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
        gap="10px 0px"
      >
        {recipes &&
          recipes.map(
            ({
              recipeid,
              recipetitle,
              recipediscription,
              recipecooktime,
              reciperatings,
            }: any) => {
              return likeBasket.includes(recipeid) ? (
                <RecipeCard
                  key={recipeid}
                  recipeId={recipeid}
                  Img={recipeid}
                  Alt={recipetitle}
                  Title={recipetitle}
                  Discription={recipediscription}
                  Timer={recipecooktime}
                  Rating={reciperatings}
                  handleClick={() => ""}
                />
              ) : (
                ""
              );
            }
          )}
      </chakra.ul>
    </Flex>
  );
}
export default memo(MenuFavourites);
