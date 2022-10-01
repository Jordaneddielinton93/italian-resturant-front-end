import { recipesTypes } from "@/pages/recipes";
import { Flex, chakra, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuStage } from "../01-Reducers/resturantSlice";
import BookingProcessProceedButton from "../Buttons/BookingProcessProceedButton";
type Props = {};

export default function MenuBasket({ recipes }: any) {
  let { menuBasket, menuStage } = useSelector((state: any) => state.resturant);

  function filterDuplicatesReturnLength(recipeId: number) {
    return menuBasket.filter(
      (numberInBasketId: number) => numberInBasketId === recipeId
    ).length;
  }
  // ^^ maps menuBasket and filters all other then recipe id then returns length,

  function getPriceBasedOnRatings() {
    return menuBasket
      .map((numb: number) => {
        return recipes.find(
          ({ recipeid }: { recipeid: number }) => recipeid === numb
        ).reciperatings;
      })
      .reduce((partialSum: number, a: number) => partialSum + a, 0);
  }
  // ^^ maps through foodbasket, finds each item by id and returns rating number then sums entire mapped Arr

  return (
    <Flex
      h={["160px", "212px", "212px", "212px"]}
      minH={["160px", "212px", "212px", "212px"]}
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

      <BookingProcessProceedButton />

      <chakra.ul overflowX={"hidden"} w={["190px", "190px", "95%", "95%"]}>
        {recipes &&
          recipes.map(
            ({ recipeid, recipetitle, reciperatings }: any, index: number) => {
              let quantity = filterDuplicatesReturnLength(recipeid);
              return (
                <chakra.li
                  key={recipeid}
                  w="200px"
                  overflow="hidden"
                  fontSize="10px"
                >
                  {menuBasket.includes(recipeid) &&
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
