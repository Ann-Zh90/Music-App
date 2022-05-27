import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import StartPage from "./StartPage";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { testUseSelector } from "../../../store/test-selector";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../../store/hooks");
const storeProps = {
  user: {
    userName: "",
    totalScore: 0,
    musicData: [],
    isLoading: false,
  },
};

describe("StartPage", () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    const dispatch = jest.fn();
    store = mockStore(storeProps);
    useAppSelector.mockImplementation(testUseSelector);
    useAppDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Btn disabled", () => {
    render(
      <Provider store={store}>
        <Router>
          <StartPage {...storeProps} store={store} />
        </Router>
      </Provider>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("Btn is active after user typing in input", async () => {
    render(
      <Provider store={store}>
        <Router>
          <StartPage {...storeProps} store={store} />
        </Router>
      </Provider>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Anna");
    await waitFor(() => expect(screen.getByRole("button")).not.toBeDisabled(), {
      timeout: 5000,
    });
  });
});
