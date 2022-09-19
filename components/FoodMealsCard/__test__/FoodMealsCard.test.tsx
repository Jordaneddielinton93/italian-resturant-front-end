import { getByText, render, screen } from "@testing-library/react";
import FoodMealsCard from "../FoodMealsCard";

describe("should test food cards ", () => {
  test("should display a price with each meal card as well as the pount symbol £", () => {
    render(
      <FoodMealsCard
        image=""
        title="chicken"
        rating={5}
        price={34}
        borderColor="red"
        tags={["meats", "vegitarian"]}
      />
    );

    let price = screen.getByText("£34");
    let tags = screen.getByText("meats");
    let title = screen.getByText("chicken");
    expect(price).toBeInTheDocument();
    expect(tags).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
