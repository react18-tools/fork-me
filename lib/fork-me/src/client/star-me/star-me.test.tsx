import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, test, vi } from "vitest";
import { StarMe } from "./star-me";

describe("star-me", () => {
  afterEach(cleanup);

  test("smoke", ({ expect }) => {
    render(<StarMe gitHubUrl="https://github.com/mayank1513/turborepo-template" />);
    expect(screen.getByTestId("star-me").textContent).toBe("Star Me");
  });

  test("test custom children", ({ expect }) => {
    const text = "Star this repo";
    render(<StarMe gitHubUrl="https://github.com/mayank1513/turborepo-template">{text}</StarMe>);
    expect(screen.getByTestId("star-me").textContent).toBe(text);
  });

  test("test custom props", ({ expect }) => {
    const className = "my-star-class";
    render(
      <StarMe className={className} gitHubUrl="https://github.com/mayank1513/turborepo-template" />,
    );
    expect(screen.getByTestId("star-me").className).toBe(className);
  });

  // Need help - fireEvent is not working
  test.skip("test popup", ({ expect }) => {
    render(<StarMe gitHubUrl="https://github.com/mayank1513/turborepo-template" />);
    const spy = vi.spyOn(window, "open");
    fireEvent.click(screen.getByTestId("star-me"));
    expect(spy).toHaveBeenCalled();
  });
});
