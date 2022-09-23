import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NavMenu({}: Props) {
  return (
    <Box display={["flex", "flex", "none", "none"]}>
      <Menu>
        <MenuButton as={Button} color="black">
          <HamburgerIcon
            fontSize={"2xl"}
            display={["flex", "flex", "none", "none"]}
          />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Pages">
            <MenuItem>
              <Link href="/menu">Menu</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/recipes">Recipes</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">Contact</Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}
