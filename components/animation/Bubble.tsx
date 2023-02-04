import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";
type Props = {};

export default function Bubble({}: Props) {
  return (
    <Box position={"absolute"} top="0" left="0">
      <Box
        w="100vw"
        h={"100vh"}
        bottom="0"
        left="0"
        position="fixed"
        right="0"
        top="0"
        zIndex="-1"
      >
        <Box className={`${styles.bubble} ${styles.x1}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x2}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x3}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x4}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x5}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x6}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x7}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x8}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x9}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x10}`}>Bowles</Box>

        <Box className={`${styles.bubble} ${styles.x11}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x12}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x13}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x14}`}>Bowles</Box>
        <Box className={`${styles.bubble} ${styles.x15}`}>Bowles</Box>
      </Box>
    </Box>
  );
}
