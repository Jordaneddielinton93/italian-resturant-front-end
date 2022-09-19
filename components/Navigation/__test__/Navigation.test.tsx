import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation";

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

describe("it should should test all parts of the navigation component", () => {
  it("should should render logo image", () => {
    render(<Navigation isSignedIn={false} />);
    let logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
  it("should render 5 list items: menu,recipes,Contact,About,FAQ", () => {
    render(<Navigation isSignedIn={false} />);
    let arrOfListItems = ["Menu", "Recipes", "Contact", "About", "FAQ"];
    arrOfListItems.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
  it.skip("should render a button with sign in text", () => {
    render(<Navigation isSignedIn={false} />);
    let signinBtn = screen.getByText("Sign in");
    expect(signinBtn).toBeInTheDocument();
  });
  it.skip("should render a button with a signed in icon if the user is signed in", () => {
    render(<Navigation isSignedIn={true} />);
    let signinBtn = screen.getByTestId("signedInIcon");
    expect(signinBtn).toBeInTheDocument();
  });
  it.skip("should render navigate between all 6 pages home,menu,contact,about and FaQ", () => {});
});
