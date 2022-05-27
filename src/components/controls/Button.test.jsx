import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Button from "./Button";
import { act } from "react-dom/test-utils";

describe("Btn tests", () => {
  it("btn is rendered", () => {
    render(
      <MemoryRouter>
        <Button>Next</Button>
      </MemoryRouter>
    );
    const text = screen.getByText("Next");
    expect(text).toBeInTheDocument();
  });

  it("btn is active", () => {
    render(
      <MemoryRouter>
        <Button disabled={false}>Next</Button>
      </MemoryRouter>
    );
    const btn = screen.getByRole("button");
    expect(btn).not.toBeDisabled();
  });

  it("btn", () => {
    const onClick = jest.fn();
    render(
      <MemoryRouter>
        <Button disabled={false} onClick={onClick}>
          Next
        </Button>
      </MemoryRouter>
    );
    const btn = screen.getByRole("button");
    act(() => {
      btn.click();
    });
    expect(onClick).toBeCalled();
  });
});
