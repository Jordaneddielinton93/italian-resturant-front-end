import { Flex, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function ImageCarousel({}: Props) {
  return (
    <Flex
      h={"341px"}
      as={"section"}
      justifyContent="center"
      alignItems={"center"}
      overflow="hidden"
    >
      <Flex
        h={"170px"}
        width="915px"
        minW={"915px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {[
          "/images/Carousel/image1.png",
          "/images/Carousel/image2.png",
          "/images/Carousel/image3.png",
          "/images/Carousel/image4.png",
          "/images/Carousel/image5.png",
        ].map((image, index) => {
          return (
            <Image
              key={image}
              _hover={{
                height: "170px",
                width: "170px",
                stroke: "purple",
                transition: "0.5s",
                cursor: "pointer",
              }}
              w={"147px"}
              h={"147px"}
              src={image}
              m="0px 15px"
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
