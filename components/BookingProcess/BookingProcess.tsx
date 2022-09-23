import { Flex, useMediaQuery } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import BookingProcessCard from "../BookingProcessCard/BookingProcessCard";
import { BookingProcessArr } from "../constants/constants";

export default function BookingProcess() {
  let state = useSelector((state: any) => state.resturant);
  function colorLogic() {
    if (state.menuStage == "Menu") return 0;
    if (state.menuStage == "Basket") return 1;
    if (state.menuStage == "Book A Seat") return 2;
    if (state.menuStage == "Checkout") return 3;
    return "";
  }
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Flex
      h={["100px", "100px", "60px", "60px"]}
      w="100%"
      justifyContent={[
        "space-evenly",
        "space-between",
        "space-between",
        "space-between",
      ]}
      alignItems="center"
      position={isLargerThan480 ? "static" : "absolute"}
      bottom={0}
      left={0}
      bg="white"
      zIndex={"3"}
    >
      {BookingProcessArr.map(({ icon, title }, index) => {
        return (
          <BookingProcessCard
            icon={icon}
            title={title}
            isBookingStage={index <= colorLogic()}
            hasAnimation={index == colorLogic()}
            //  if you are at that menu stage or below return true else false
          />
        );
      })}
    </Flex>
  );
}
