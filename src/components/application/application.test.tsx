import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("Renders correct", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job app form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const pElement = screen.getByText("All fields", { exact: false });
    expect(pElement).toBeInTheDocument();

    const pElement2 = screen.getByText(/all fields/i);
    expect(pElement2).toBeInTheDocument();

    const pElement3 = screen.getByText((content, element) =>
      content.startsWith("All fields")
    );
    expect(pElement3).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const imgElement = screen.getByAltText(/something/i);
    expect(imgElement).toBeInTheDocument();

    const customEL = screen.getByTestId("custom-element");
    expect(customEL).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Umid");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const termsEl2 = screen.getByLabelText("I agree with the terms");
    expect(termsEl2).toBeInTheDocument();

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });
});
