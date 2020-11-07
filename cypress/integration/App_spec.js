describe("Smoke test", () =>
  it("renders learn react link", async () => {
    cy.visit("/")
      .get("h1")
      .contains(/hello, world/i);
  }));
