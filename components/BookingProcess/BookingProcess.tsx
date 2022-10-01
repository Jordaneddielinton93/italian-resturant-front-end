import { Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import BookingProcessCard from "../BookingProcessCard/BookingProcessCard";
import { BookingProcessArr } from "../constants/constants";

export default function BookingProcess({ menuStage }: { menuStage: string }) {
  function colorLogic() {
    if (menuStage == "Menu") return 0;
    if (menuStage == "Basket") return 1;
    if (menuStage == "Seat") return 2;
    if (menuStage == "Checkout") return 3;
    return "Menu";
  }

  return (
    <Flex
      h={["100px", "100px", "60px", "60px"]}
      w="100%"
      p={"0px 5px"}
      justifyContent={[
        "space-evenly",
        "space-between",
        "space-between",
        "space-between",
      ]}
      alignItems="center"
      position={["fixed", "fixed", "static", "static"]}
      bottom={0}
      left={0}
      bg="white"
      zIndex={"3"}
    >
      {BookingProcessArr.map(({ icon, title }, index) => {
        // let newcolorLogic = colorLogic();
        return (
          <BookingProcessCard
            key={title}
            icon={icon}
            title={title}
            isBookingStage={index <= colorLogic()}
            //  if you are at that menu stage or below return true else false
          />
        );
      })}
    </Flex>
  );
}
