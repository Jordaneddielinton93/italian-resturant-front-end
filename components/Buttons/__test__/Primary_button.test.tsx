import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Primary_button from "../Primary_button";

type props = {
  children: any;
};

let UserProvider = (props: props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

describe("it should test all parts of the Primary button component", () => {
  it("should fire event when clicked on Button", () => {
    let mockHandleClick = jest.fn();
    render(
      <UserProvider>
        <Primary_button
          title="test"
          isSignedin={false}
          handleClick={mockHandleClick}
        />
      </UserProvider>
    );
    let button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
