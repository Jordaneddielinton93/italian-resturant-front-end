import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../02-store/store";
import Layout from "../Layout";

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

describe("Should render 3 components the main Layout , navbar and a footer", () => {
  it("should render a layout component", () => {
    render(
      <Provider store={store}>
        <Layout>[]</Layout>
      </Provider>
    );
    let LayoutDiv = screen.getByTestId("Layout");
    expect(LayoutDiv).toBeInTheDocument();
  });
  it("should render a layout component with a Navbar inside of it", () => {
    render(
      <Provider store={store}>
        <Layout>[]</Layout>
      </Provider>
    );
    let NavBar = screen.getByRole("navigation");
    expect(NavBar).toBeInTheDocument();
  });
  it("should render a layout component with a Footer inside of it", () => {
    render(
      <Provider store={store}>
        <Layout>[]</Layout>
      </Provider>
    );
    let Footer = screen.getByTestId("Footer");

    expect(Footer).toBeInTheDocument();
  });
});
