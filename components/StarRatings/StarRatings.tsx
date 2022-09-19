import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  rating: number;
  left: string;
  bottom: string;
};

export default function StarRatings({ rating, left, bottom }: Props) {
  return (
    <Flex
      justifyContent="space-between"
      zIndex="2"
      pos={"absolute"}
      bottom={bottom}
      left={left}
    >
      {["", "", "", "", ""].map((_, index) => {
        return index + 1 <= rating ? (
          <StarIcon w="14px" h="14px" color={"brand.green.200"} key={index} />
        ) : (
          <StarIcon
            key={index}
            w="14px"
            h="14px"
            color={"#C1C1C1"}
            _hover={{ stroke: "green" }}
          />
        );
      })}
    </Flex>
  );
}
