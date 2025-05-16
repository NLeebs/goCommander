import { render } from "@testing-library/react-native";
import React from "react";
import PlayerContainer from "../PlayerContainer";

describe("PlayerContainer", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<PlayerContainer />);
    const container = getByTestId("player-container");
    expect(container).toBeTruthy();
  });

  it("renders four player cards", () => {
    const { getAllByTestId } = render(<PlayerContainer />);
    const playerCards = getAllByTestId("player-card");
    expect(playerCards).toHaveLength(4);
  });
});
