describe("Smoke test", () =>
  it("renders learn react link", () =>
    cy
      .visit("/")
      .get("a")
      .contains(/learn react/i)));
