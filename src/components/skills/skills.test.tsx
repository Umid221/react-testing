import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole("button", {
      name: "Log In",
    });
    expect(loginBtn).toBeInTheDocument();
  });

  test("manual query of renders login button", () => {
    const { container } = render(<Skills skills={skills} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const loginBtn = container.querySelector(".login-btn");
    expect(loginBtn).toBeInTheDocument();
  });

  test("start learning button not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("Start learning btn displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug()
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug()
    expect(startLearningBtn).toBeInTheDocument();
  });
});
