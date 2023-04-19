import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet group", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    // test.only('Greet renders props correctly', ()=>{
    // test.skip('Greet renders props correctly', ()=>{
    test("renders props correctly", () => {
      render(<Greet name="Umid" />);
      const textElement = screen.getByText("Hello Umid");
      expect(textElement).toBeInTheDocument();
    });
  });
});
