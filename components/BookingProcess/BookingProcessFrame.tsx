import { Flex } from "@chakra-ui/react";
import React from "react";
import BookingProcessCardFrame from "../BookingProcessCard/BookingProcessCardFrame";
let BookingProcessArr = [
  {
    icon: "icon",
    title: "Menu",
  },
  {
    icon: "icon",
    title: "Basket",
  },
  {
    icon: "icon",
    title: "Seat",
  },
  {
    icon: "icon",
    title: "Checkout",
  },
];

export default function BookingProcessFrame() {
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
      {BookingProcessArr.map(({ icon, title }) => {
        return (
          <BookingProcessCardFrame key={title} icon={icon} title={title} />
        );
      })}
    </Flex>
  );
}
