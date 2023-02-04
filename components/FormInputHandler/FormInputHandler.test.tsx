import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormInputHandler from "./FormInputHandler";

describe("FormInputHandler", () => {
  it("renders label and input correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <FormInputHandler
        label="Username"
        type="text"
        name="username"
        placerholder="Enter your username"
        value=""
        errorBorder={false}
        errMessage=""
        handleClick={() => {}}
        onChange={() => {}}
        onFocus={() => {}}
      />
    );

    expect(getByText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your username")).toBeInTheDocument();
  });

  it("displays error message and Ok button when errorBorder is true", () => {
    const { getByText, getByRole } = render(
      <FormInputHandler
        label="Username"
        type="text"
        name="username"
        placerholder="Enter your username"
        value=""
        errorBorder={true}
        errMessage="This field is required"
        handleClick={() => {}}
        onChange={() => {}}
        onFocus={() => {}}
      />
    );

    expect(getByText("This field is required")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("calls onChange function when input value changes", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInputHandler
        label="Username"
        type="text"
        name="username"
        placerholder="Enter your username"
        value=""
        errorBorder={false}
        errMessage=""
        handleClick={() => {}}
        onChange={mockOnChange}
        onFocus={() => {}}
      />
    );

    const input = getByPlaceholderText("Enter your username");
    fireEvent.change(input, { target: { value: "test-user" } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("calls handleClick function when Ok button is clicked", () => {
    const mockHandleClick = jest.fn();
    const { getByRole } = render(
      <FormInputHandler
        label="Username"
        type="text"
        name="username"
        placerholder="Enter your username"
        value=""
        errorBorder={true}
        errMessage="This field is required"
        handleClick={mockHandleClick}
        onChange={() => {}}
        onFocus={() => {}}
      />
    );

    const button = getByRole("button");
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
