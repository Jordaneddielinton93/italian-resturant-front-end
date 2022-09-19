import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";
import * as mediaQueryHooks from "@chakra-ui/media-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
const MockChakra = ({ children }: any) => {
  const theme = extendTheme({
    colors: {
      brand: {
        green: {
          100: "#00FF7A",
          200: "#01E26D",
        },
        red: {
          100: "#EE3B48",
          200: "#CE2B37",
        },
        Paragraph: "#A7A6A7",
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

describe("should test 3 sections on hero component", () => {
  // jest
  //   .spyOn(mediaQueryHooks, "useBreakpointValue")
  //   .mockImplementationOnce(() => 4);
  it("should display a headings & paragraphs", () => {
    render(
      <MockChakra>
        <HeroSection isHomePage={true} />
      </MockChakra>
    );
    let heading = screen.getByText("Quick meals to your door");
    // let heading2 = screen.getByText("Try Our new Salad");
    // let discription = screen.getByText(
    //   "Fresh and tasty sea food all made with the most exotic flavours!."
    // );
    // expect(heading).toBeInTheDocument()
    expect(heading).toBeInTheDocument();
    // expect(discription).toBeInTheDocument();
    // expect(heading2).toBeInTheDocument();
  });

  it("should display a Primary button", () => {
    render(
      <MockChakra>
        <HeroSection isHomePage={true} />
      </MockChakra>
    );
    let button = screen.getByText("Order Now");
    expect(button).toBeInTheDocument();
  });

  it("should display a the bowl image ", () => {
    render(
      <MockChakra>
        <HeroSection isHomePage={true} />
      </MockChakra>
    );
    let bowlimg = screen.getByAltText("bowl-icon");
    expect(bowlimg).toBeInTheDocument();
  });
});
