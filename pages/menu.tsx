import BookingProcess from "@/components/BookingProcess/BookingProcess";
import CategorieButtons from "@/components/CategorieButtons/CategorieButtons";
import MenuBasketAndFavourite from "@/components/MenuBasketAndFavourite/MenuBasketAndFavourite";
import { Box, Flex } from "@chakra-ui/react";
import MenuCardItems from "@/components/MenuCardItems/MenuCardItems";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import { server } from "../config/index.js";
import { recipesTypes } from "./recipes.jsx";
import { useSelector } from "react-redux";

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/cookingrecipes`);
  const data = await res.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default function Menu({ data }: { data: recipesTypes }) {
  let { menuStage } = useSelector((state: any) => state.resturant);

  let [recipeTag, setRecipeTag] = useState("");
  let handleClickChooseTag = useCallback(
    (tag: string) => setRecipeTag(tag),
    []
  );

  return (
    <Box padding={"0 20px"}>
      <Head>
        <title>Bowles - Menu </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <BookingProcess menuStage={menuStage} /> */}
      <CategorieButtons
        handleClickChooseTag={handleClickChooseTag}
        recipeTag={recipeTag}
      />
      <Flex
        borderTop={"solid thin black"}
        justifyContent="space-between"
        flexDir={["column-reverse", "column-reverse", "row", "row"]}
      >
        {menuStage == "Menu" && (
          <MenuCardItems recipes={data} recipeTag={recipeTag} />
        )}
        {menuStage == "Basket" && "nothing"}
        {menuStage == "Seat" && "nothing"}
        {menuStage == "Checkout" && "nothing"}

        <MenuBasketAndFavourite recipes={data} />
      </Flex>
    </Box>
  );
}
