import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuStage } from "../01-Reducers/resturantSlice";
import styles from "./styles.module.css";

export default function BookingProcessPrevButton() {
  let { menuBasket, menuStage, seats } = useSelector(
    (state: any) => state.resturant
  );
  let dispatch = useDispatch();
  let hasSeatInArr = seats.length;
  console.log(menuStage);
  return (
    <Button
      className={styles.custom_btn}
      display={menuStage != "Menu" ? "inline" : "none"}
      mt={"2px"}
      onClick={() =>
        seats.length &&
        dispatch(changeMenuStage(menuStage == "Seat" ? "Menu" : "Seat"))
      }
      fontWeight={"normal"}
      w={["190px", "190px", "95%", "95%"]}
      h={["43px"]}
      minH={"43px"}
      bg={hasSeatInArr ? "black" : "gray"}
      color={"white"}
      cursor={hasSeatInArr ? "pointer" : "not-allowed"}
    >
      Go Back to {menuStage == "Seat" ? "Menu" : "Seat"}
    </Button>
  );
}
