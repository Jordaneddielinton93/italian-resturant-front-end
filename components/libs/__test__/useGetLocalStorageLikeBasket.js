import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import { useGetLocalStorageLikeBasket } from "../useGetLocalStorageLikeBasket";

afterEach(cleanup);

const TestComponent = () => {
  const { likeBasket, setToggle } = useGetLocalStorageLikeBasket();

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ul>
        {likeBasket.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

describe("useGetLocalStorageLikeBasket", () => {
  it("retrieves local storage items and maps them correctly", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
        key: jest.fn(),
        length: jest.fn(),
      },
      writable: true,
    });

    const { getByText, getByTestId } = render(<TestComponent />);
    expect(getByText("Toggle")).toBeInTheDocument();
    expect(getByTestId("like-basket")).toBeEmpty();

    act(() => {
      Object.keys(window.localStorage).forEach((key) => {
        window.localStorage[key] = ["recipeId1", "recipeId2"];
      });
    });

    act(() => {
      fireEvent.click(getByText("Toggle"));
    });

    expect(getByTestId("like-basket")).toHaveLength(2);
    expect(getByTestId("like-basket-item-1")).toHaveTextContent("1");
    expect(getByTestId("like-basket-item-2")).toHaveTextContent("2");
  });
});
