import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Primary_button from "../Buttons/Primary_button";
import { FaHamburger } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavMenu from "../Modals/NavMenu";

export default function Navigation({}) {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  // const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  function handleClickSignin() {}

  return (
    <Box
      as="nav"
      borderTopRadius="20px"
      w={"100%"}
      h="90px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="0px 20px"
      bg="white"
    >
      <Link href="/">
        <Image
          cursor={"pointer"}
          src="/images/Misc/logo.png"
          width="66px"
          height="38px"
          alt="logo"
        />
      </Link>

      <Box
        as="ul"
        display={["none", "none", "flex", "flex"]}
        w="300px"
        marginRight="30%"
        justifyContent="space-between"
        listStyleImage="none"
      >
        <li>
          <Link href="/">Menu</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/">Contact</Link>
        </li>

        <li>
          <Link href="/">FAQ</Link>
        </li>
      </Box>
      <Flex
        zIndex={5}
        w={["120px", "120px", "50px", "50px"]}
        justify={"space-between"}
        alignItems="center"
      >
        <NavMenu />

        <Primary_button title={"Sign in"} handleClick={handleClickSignin} />
      </Flex>
    </Box>
  );
}
