import { render, screen } from "@testing-library/react";

import OurAim from "../OurAim";

describe("test all Our Aim component", () => {
  test("should test each box has a heading,and discription", () => {
    render(<OurAim />);
    let ourAimSubTitle = screen.getByText("Our Aim");
    let ourAimTitle = screen.getByText("Bridging the food gap");
    let ourAimDes = screen.getByText(
      "Helping any and everyone make tasty orginal food just like Mama’s italian cooking"
    );
    expect(ourAimSubTitle).toBeInTheDocument();
    expect(ourAimTitle).toBeInTheDocument();
    expect(ourAimDes).toBeInTheDocument();
  });
});
