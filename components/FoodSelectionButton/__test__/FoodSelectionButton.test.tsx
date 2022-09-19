import { render, screen } from "@testing-library/react";
import FoodSelectionButton from "../FoodSelectionButton";

describe("it should test each part of the foodselection component", () => {
  it("should render a button", () => {
    render(<FoodSelectionButton title="Breakfast" iconColor="black" />);
    let button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("should render an image", () => {
    render(<FoodSelectionButton title="Breakfast" iconColor="black" />);
    let image = screen.getByAltText("chef icon");

    expect(image).toBeInTheDocument();
  });
});
