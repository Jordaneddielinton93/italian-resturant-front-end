import { render, screen } from "@testing-library/react";
import HeroCarousel from "../HeroCarousel";
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
describe("it should test the Carousel buttons", () => {
  it("should render left icon", () => {
    render(<HeroCarousel />);
    let rightArrow = screen.getByTestId("ArrowLeftIcon");
    expect(rightArrow).toBeInTheDocument();
  });
  it("should render right icon", () => {
    render(<HeroCarousel />);
    let rightArrow = screen.getByTestId("ArrowRightIcon");
    expect(rightArrow).toBeInTheDocument();
  });
  it("should render slider", () => {
    render(<HeroCarousel />);
    let slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });
  // it('should move 30px when right arrow clicked', () => {
  //     render(<HeroCarousel/>)
  //     let slider = screen.getByTestId("slider")
  //     // let style = window.getComputedStyle(slider);

  //     expect(slider).toHaveAttribute('style',`transform: translate(-20%,0);`)

  // });
});
