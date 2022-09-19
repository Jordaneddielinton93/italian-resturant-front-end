import { render, screen } from "@testing-library/react";
import FoodSelection from "../FoodSelection";

describe("it should test each part of the foodselection component", () => {
  it("should render 6 buttons", () => {
    render(<FoodSelection />);
    let buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    expect(buttons).toHaveLength(6);
  });

  it('should have a main title "eat out or eat in ?" ', () => {
    render(<FoodSelection />);
    let title = screen.getByText("Eat Out or Eat In ?");
  });

  it.skip("should have titles for each button", () => {
    render(<FoodSelection />);
    let buttons = screen.getAllByRole("button");
    buttons.forEach((btnTitle) => {
      expect(screen.getByText(btnTitle.innerText)).toBeInTheDocument();
    });
  });
});
