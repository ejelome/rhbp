import { act, render, screen } from "@testing-library/react";

import App from "../../App";

beforeEach(() => {
  const response = {
    type: "articles",
    id: "1",
    attributes: { title: "test hello, world" },
  };
  const json = { json: () => Promise.resolve(response) };
  global.fetch = jest.fn(() => Promise.resolve(json));
});

describe("<App />", () =>
  test("renders learn react link", async () => {
    await act(async () => render(<App />));
    expect(screen.getByText(/test hello, world/i)).toBeInTheDocument();
  }));
