import { recipesTypes } from "@/pages/recipes";
import { Flex, chakra, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function MenuBasket({ recipes }: any) {
  let state = useSelector((state: any) => state.resturant);
  function filterDuplicatesReturnLength(fetchRecipeId: number) {
    return state.menuBasket.filter(
      (numberId: number) => numberId === fetchRecipeId
    ).length;
  }
  return (
    <Flex
      h={["160px", "212px", "212px", "212px"]}
      w="100%"
      bg={"#EDF1F4"}
      border={"solid 1px black"}
      m="10px 0"
      flexDir={"column"}
      alignItems="center"
    >
      <Heading
        as={"h4"}
        fontSize="16px"
        w={"100%"}
        p="10px"
        textAlign={"center"}
      >
        Total:$3234
      </Heading>
      <Button w={"190px"} h="43px" bg="black" color={"white"}>
        Proceed to Table
      </Button>
      <chakra.ul overflowY={"scroll"}>
        {recipes &&
          recipes.map(({ recipeid, recipetitle }: any, index: number) => {
            return (
              <chakra.li key={recipeid} fontSize="13px">
                {state.menuBasket.includes(recipeid) &&
                  "X" +
                    filterDuplicatesReturnLength(recipeid) +
                    " " +
                    recipetitle.slice(0, 27)}
              </chakra.li>
            );
          })}
      </chakra.ul>
    </Flex>
  );
}
