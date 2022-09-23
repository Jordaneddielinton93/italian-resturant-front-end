import BookingProcess from "../BookingProcess/BookingProcess";

type IFoodCarouselItems = {
  png: string;
  bg: string[];
  foodName: string;
  foodPrice: number;
}[];

export const FoodCarouselItems: IFoodCarouselItems = [
  {
    png: "/bowl-icon2.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/bowl-icon3.png",
    bg: ["white", "#F1F1F1"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/bowl-icon4.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/bowl-icon2.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/bowl-icon3.png",
    bg: ["white", "#F1F1F1"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/bowl-icon4.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/bowl-icon2.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/bowl-icon3.png",
    bg: ["white", "#F1F1F1"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/bowl-icon4.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/bowl-icon2.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/bowl-icon3.png",
    bg: ["white", "#F1F1F1"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/bowl-icon4.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/bowl-icon2.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
];

export const FoodCarouselUserItems: IFoodCarouselItems = [
  {
    png: "/usericon1.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/usericon2.png",
    bg: ["#ffffff", "#ffffff"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/usericon3.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/usericon1.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/usericon2.png",
    bg: ["#ffffff", "#ffffff"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/usericon3.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/usericon1.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/usericon2.png",
    bg: ["#ffffff", "#ffffff"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/usericon3.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/usericon1.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
  {
    png: "/usericon2.png",
    bg: ["#ffffff", "#ffffff"],
    foodName: "Pizza",
    foodPrice: 2.5,
  },
  {
    png: "/usericon3.png",
    bg: ["brand.red.100", "brand.red.200"],
    foodName: "Veggies",
    foodPrice: 3.0,
  },
  {
    png: "/usericon1.png",
    bg: ["brand.green.100", "brand.green.200"],
    foodName: "Spaggetti",
    foodPrice: 2.0,
  },
];

import { GiBasket, GiCheckMark, GiKnifeFork } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";

export let BookingProcessArr = [
  {
    icon: <GiKnifeFork />,
    title: "Menu",
  },
  {
    icon: <GiBasket />,
    title: "Basket",
  },
  {
    icon: <MdEventSeat />,
    title: "Seat",
  },
  {
    icon: <GiCheckMark />,
    title: "Checkout",
  },
];
