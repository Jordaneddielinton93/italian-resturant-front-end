import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInistialRecipeFavouriteBasket } from "../01-Reducers/resturantSlice";
import Footer from "../Footer/Footer";
import { useGetLocalStorageLikeBasket } from "../libs/useGetLocalStorageLikeBasket";
import Navigation from "../Navigation/Navigation";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  let { likeBasket } = useGetLocalStorageLikeBasket();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(addInistialRecipeFavouriteBasket(likeBasket));
  }, [likeBasket]);
  const [isLargerThan390] = useMediaQuery("(min-width: 500px)");
  // ...getLocalStorageLikeBasket()
  let openingDaysTimes = [
    { day: "Monday", time: "7:00 - 24:00" },
    { day: "Tuesday", time: "7:00 - 24:00" },
    { day: "Wednesday", time: "7:00 - 24:00" },
    { day: "Thursday", time: "7:00 - 24:00" },
    { day: "Friday", time: "7:00 - 24:00" },
    { day: "Saturday", time: "" },
    { day: "Sunday", time: "" },
  ];

  return (
    <Box
      bg="white"
      position="relative"
      maxW="1200px"
      // m="auto"
      margin="auto"
      marginTop={isLargerThan390 ? "40px" : 0}
      borderRadius={5}
      data-testid="Layout"
      boxShadow={isLargerThan390 ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : 0}
      overflow="hidden"
      border={"inset thick white"}
    >
      <Navigation />
      {children}
      <Footer openingDaysTimes={openingDaysTimes} />
    </Box>
  );
}
