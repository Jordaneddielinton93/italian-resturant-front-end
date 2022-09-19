import React, { useEffect, useState } from "react";

export function useGetLocalStorageLikeBasket() {
  let [likeBasket, setLikeBasket] = useState([]);
  let [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let localArrKeys = Object.keys(localStorage);
      setLikeBasket(
        localArrKeys
          .filter((item) => item.includes("recipeId"))
          .map((recipeId) => {
            return Number(recipeId.split("recipeId")[1]);
          })
      );
    }
  }, [toggle]);

  return { likeBasket, setToggle };
}
// gets local storage numbers, changes them into numbers ands them to the array
