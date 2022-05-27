import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import Player1 from "./Player1";

export const mocks = {
  Audio: {
    pause: jest.fn(),
    play: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    paused: true,
  },
};

describe("Player tests", () => {
  beforeEach(() => {
    global.Audio = jest.fn().mockImplementation(() => ({
      pause: mocks.Audio.pause,
      play: mocks.Audio.play,
      addEventListener: mocks.Audio.addEventListener,
      removeEventListener: mocks.Audio.removeEventListener,
      paused: mocks.Audio.paused,
    }));
  });

  it("Player is rendered", () => {
    render(<Player1 />);
    const playBtn = screen.getByTestId("playBtn");
    expect(playBtn).toBeInTheDocument();
  });

  it("Player is playing", async () => {
    render(<Player1 />);
    const playBtn = screen.getByTestId("playBtn");
    act(() => {
      playBtn.click();
    });
    expect(mocks.Audio.play).toBeCalled();
  });
});
