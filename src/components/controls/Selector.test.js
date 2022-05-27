import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Selector from "./Selector";
import { act } from "react-dom/test-utils";

describe("Selector tests", () => {
  it("don't count attemps if right answer was founded", () => {
    const onClick = jest.fn();
    const countAttemps = jest.fn();
    const rightAnswer = true;
    render(
      <Router>
        <Selector
          rightAnswer={rightAnswer}
          onClick={onClick}
          countAttemps={countAttemps}
        >
          Song
        </Selector>
      </Router>
    );

    const selectorElem = screen.getByTestId("selector-item");
    expect(selectorElem).toBeInTheDocument();
    act(() => {
      selectorElem.click();
    });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(countAttemps).toHaveBeenCalledTimes(0);
  });

  it("if it is correct answer, change selector color", () => {
    const onClick = jest.fn();
    const countAttemps = jest.fn();
    const rightAnswer = false;
    const rightAnswerIsFound = jest.fn();
    render(
      <Router>
        <Selector
          rightAnswer={rightAnswer}
          onClick={onClick}
          countAttemps={countAttemps}
          id="2"
          quizSongId="2"
          rightAnswerIsFound={rightAnswerIsFound}
        >
          Song
        </Selector>
      </Router>
    );

    const selectorElem = screen.getByTestId("selector-item");
    act(() => {
      selectorElem.click();
    });

    expect(selectorElem.classList.contains("correct")).toBeTruthy();
  });

  it("if correct answer was found, don't change classes in other selectors", () => {
    const onClick = jest.fn();
    const countAttemps = jest.fn();
    const rightAnswer = true;
    const rightAnswerIsFound = jest.fn();
    render(
      <Router>
        <Selector
          rightAnswer={rightAnswer}
          onClick={onClick}
          countAttemps={countAttemps}
          id="2"
          quizSongId="2"
          rightAnswerIsFound={rightAnswerIsFound}
        >
          Song
        </Selector>
      </Router>
    );

    const selectorElem = screen.getByTestId("selector-item");
    act(() => {
      selectorElem.click();
    });

    expect(selectorElem.classList.length).toBe(1);
  });
});
