import React from "react";

export default function getSpecificCard(arrayToFilter: any, recipeId: number) {
  return arrayToFilter.filter((item: any) => {
    return item.recipeid === recipeId;
  })[0];
}
