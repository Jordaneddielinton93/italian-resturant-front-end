import { recipesTypes } from "@/pages/recipes";
import { Flex, chakra, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuStage } from "../01-Reducers/resturantSlice";
import BookingProcessPrevButton from "../Buttons/BookingProcessPrevButton";
import BookingProcessProceedButton from "../Buttons/BookingProcessProceedButton";
type Props = {};

export default function MenuBasket({ recipes }: any) {
  let { menuBasket, seats } = useSelector((state: any) => state.resturant);

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
  function amountOfSeatsPerTable() {
    return seats
      .map((arr: number[]) => {
        return arr.length;
      })
      .reduce((partialSum: any, a: any) => partialSum + a, 0);
  }
  return (
    <Flex
      h={["160px", "212px", "212px", "212px"]}
      minH={["160px", "212px", "212px", "212px"]}
      w="90%"
      bg={"#EDF1F4"}
      border={"solid 1px black"}
      m="10px"
      flexDir={"column"}
      alignItems="center"
    >
      <BookingProcessProceedButton />
      <BookingProcessPrevButton />
      <Heading
        as={"h4"}
        fontSize="16px"
        fontWeight={"light"}
        w={"100%"}
        p="10px"
        textAlign={"center"}
      >
        Total:£{getPriceBasedOnRatings() + amountOfSeatsPerTable()}
      </Heading>

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
        {seats
          .filter((arr: number[]) => arr.length)
          .map((arr: number[], index: number) => {
            return (
              <chakra.li>
                {"x" + arr.length + " - Seats at Table " + (index + 1)}
              </chakra.li>
            );
          })}
      </chakra.ul>
    </Flex>
  );
}
