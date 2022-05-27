import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./Button";
import { act } from "react-dom/test-utils";

describe("Btn tests", () => {
  it("btn is rendered", () => {
    render(
      <Router>
        <Button>Next</Button>
      </Router>
    );
    const text = screen.getByText("Next");
    expect(text).toBeInTheDocument();
  });

  it("btn is active", () => {
    render(
      <Router>
        <Button disabled={false}>Next</Button>
      </Router>
    );
    const btn = screen.getByRole("button");
    expect(btn).not.toBeDisabled();
  });

  it("btn", () => {
    const onClick = jest.fn();
    render(
      <Router>
        <Button disabled={false} onClick={onClick}>
          Next
        </Button>
      </Router>
    );
    const btn = screen.getByRole("button");
    act(() => {
      btn.click();
    });
    expect(onClick).toBeCalled();
  });
});
