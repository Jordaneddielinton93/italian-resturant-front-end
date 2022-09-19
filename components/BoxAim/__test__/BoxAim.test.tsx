import { render, screen } from "@testing-library/react";
import {
  GiBananaPeeled,
  GiFruitBowl,
  GiHamburger,
  GiHomeGarage,
} from "react-icons/gi";
import BoxAim from "../BoxAim";
let BoxAimList = {
  icon: <GiHamburger fontSize={"38px"} />,
  heading: "Priority",
  description:
    "All ingredients made from our home recipes passed down from generations",
  bgGradient: `linear(to-r, ${"#C6F6D5"}, ${"#C6F6D5"})`,
};

describe("test all Our Aim component", () => {
  test("should test each box has a heading,and discription", () => {
    render(
      <BoxAim
        icon={BoxAimList.icon}
        heading={BoxAimList.heading}
        description={BoxAimList.description}
        bgGradient={BoxAimList.bgGradient}
      />
    );
    let ourAimTitle = screen.getByText("Priority");
    let ourAimDes = screen.getByText(
      "All ingredients made from our home recipes passed down from generations"
    );
    expect(ourAimTitle).toBeInTheDocument();
    expect(ourAimDes).toBeInTheDocument();
  });
});
