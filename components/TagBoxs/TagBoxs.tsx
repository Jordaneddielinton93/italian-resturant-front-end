import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  tags: string[];
  borderColor: "string";
};

export default function TagBoxs({ tags, borderColor }: Props) {
  return (
    <Flex
      flexDir={"column"}
      w="52px"
      pos={"absolute"}
      top="38px"
      left={0}
      zIndex="3"
    >
      {tags.map((tag, index) => (
        <Flex
          key={"tag" + index}
          justifyContent={"center"}
          alignItems="center"
          w={"100%"}
          h="24px"
          bgColor={"#EDF1F4"}
          fontSize="8px"
          border={`solid thin ${borderColor}`}
          margin="1px 0px"
        >
          {tag.split(" ")[0]}
        </Flex>
      ))}
    </Flex>
  );
}
