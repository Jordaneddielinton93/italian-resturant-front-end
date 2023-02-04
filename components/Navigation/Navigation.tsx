import { Box, color, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Primary_button from "../Buttons/Primary_button";
import NavMenu from "../Modals/NavMenu";

export default function Navigation({}) {
  let { asPath } = useRouter();

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
          width="80px"
          height="80px"
          alt="logo"
        />
      </Link>

      <Box
        as="ul"
        display={["none", "none", "flex", "flex"]}
        w="300px"
        marginRight="50px"
        justifyContent="space-between"
        listStyleImage="none"
        fontFamily={"Great Vibes"}
        className="linksTag"
        gap={"30px"}
      >
        <span className={asPath == "/menu" ? "menuItem" : ""}>
          <Link href="/menu" className="menuA">
            Menu
          </Link>
        </span>
        <span className={asPath == "/recipes" ? "menuItem" : ""}>
          <Link href="/recipes">Recipes</Link>
        </span>
        <span className={asPath == "/about" ? "menuItem" : ""}>
          <Link href="/about">About</Link>
        </span>
        <span className={asPath == "/contact" ? "menuItem" : ""}>
          <Link href="/contact">Contact</Link>
        </span>
        <span className={asPath == "/faq" ? "menuItem" : ""}>
          <Link href="/faq">Faq</Link>
        </span>
      </Box>
      <Flex
        zIndex={5}
        w={["120px", "120px", "60px", "70px"]}
        justify={"space-between"}
        alignItems="center"
      >
        <NavMenu />

        {/* <Primary_button title={"Sign in"} handleClick={handleClickSignin} /> */}
      </Flex>
    </Box>
  );
}
