import { recipesTypes } from "@/pages/recipes";
import { Flex, chakra, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function MenuBasket({ recipes }: any) {
  let state = useSelector((state: any) => state.resturant);
  let basketNumbArr = state.menuBasket;
  function filterDuplicatesReturnLength(recipeId: number) {
    return basketNumbArr.filter(
      (numberInBasketId: number) => numberInBasketId === recipeId
    ).length;
  }

  function getPriceBasedOnRatings() {
    return basketNumbArr
      .map((numb: number) => {
        return recipes.find(
          ({ recipeid }: { recipeid: number }) => recipeid === numb
        ).reciperatings;
      })
      .reduce((partialSum: number, a: number) => partialSum + a, 0);
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
        fontWeight={"light"}
        w={"100%"}
        p="10px"
        textAlign={"center"}
      >
        Total:£{getPriceBasedOnRatings()}
      </Heading>
      <Button
        fontWeight={"normal"}
        w={["190px", "190px", "95%", "95%"]}
        h={["43px"]}
        bg="black"
        color={"white"}
      >
        Proceed to Table
      </Button>
      <chakra.ul overflowY={"scroll"} overflowX={"hidden"}>
        {recipes &&
          recipes.map(
            ({ recipeid, recipetitle, reciperatings }: any, index: number) => {
              let quantity = filterDuplicatesReturnLength(recipeid);
              return (
                <chakra.li key={recipeid} fontSize="10px">
                  {state.menuBasket.includes(recipeid) &&
                    "x" +
                      quantity +
                      " (£" +
                      reciperatings * quantity +
                      ") " +
                      recipetitle.slice(0, 27)}
                </chakra.li>
              );
            }
          )}
      </chakra.ul>
    </Flex>
  );
}
