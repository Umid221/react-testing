import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("test mock functions with CounterTwo", () => {
  test("should render correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    userEvent.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />
    );
    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });

    await userEvent.click(incrementBtn);
    await userEvent.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
