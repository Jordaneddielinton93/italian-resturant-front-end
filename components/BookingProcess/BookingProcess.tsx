import { Flex } from "@chakra-ui/react";
import BookingProcessCard from "../BookingProcessCard/BookingProcessCard";
import { BookingProcessArr } from "../constants/constants";

export default function BookingProcess({ menuStage }: { menuStage: string }) {
  function colorLogic() {
    return menuStage == "Menu"
      ? 0
      : menuStage == "Basket"
      ? 1
      : menuStage == "Seat"
      ? 2
      : 3;
  }
  let newcolorLogic = colorLogic();
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
        return (
          <BookingProcessCard
            key={title}
            icon={icon}
            title={title}
            isBookingStage={index <= newcolorLogic}
            //  if you are at that menu stage or below return true else false
          />
        );
      })}
    </Flex>
  );
}
