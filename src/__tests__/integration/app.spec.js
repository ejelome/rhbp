import { act, render, screen } from "@testing-library/react";

import App from "../../App";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          type: "articles",
          id: "1",
          attributes: {
            title: "hello, world",
          },
        }),
    })
  );
});

describe("<App />", () =>
  test("renders learn react link", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
  }));
