import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuStage } from "../01-Reducers/resturantSlice";

export default function BookingProcessProceedButton() {
  let { menuBasket, menuStage } = useSelector((state: any) => state.resturant);
  let dispatch = useDispatch();
  let hasItemsInBasket = menuBasket.length;
  return (
    <Button
      onClick={() =>
        menuBasket.length &&
        dispatch(
          changeMenuStage(
            menuStage == "Menu"
              ? "Basket"
              : menuStage === "Basket"
              ? "Seat"
              : "Checkout"
          )
        )
      }
      fontWeight={"normal"}
      w={["190px", "190px", "95%", "95%"]}
      h={["43px"]}
      bg={hasItemsInBasket ? "black" : "gray"}
      color={"white"}
      cursor={hasItemsInBasket ? "pointer" : "not-allowed"}
    >
      Proceed to{" "}
      {menuStage == "Menu"
        ? "Basket"
        : menuStage === "Basket"
        ? "Seat"
        : "Checkout"}
    </Button>
  );
}
