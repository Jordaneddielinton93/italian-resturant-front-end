import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function OrderNow_Button({}: Props) {
  return (
    <Link href="/recipes">
      <Button
        _hover={{ bg: "brand.grey.100", color: "black" }}
        h="55px"
        w="170px"
        bg="black"
        color="white"
        borderRadius="5px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="0px 10px 0px 5px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        overflow="hidden"
        alignSelf={"center"}
        backgroundImage="url('/images/hero/woodButton.png')"
        backgroundSize={"cover"}
        border="outset 1px black"
      >
        <Image
          src="/images/Hero/bowl-icon.png"
          alt="bowl-icon"
          width="42px"
          height="42px"
        />{" "}
        Order Now
      </Button>
    </Link>
  );
}
