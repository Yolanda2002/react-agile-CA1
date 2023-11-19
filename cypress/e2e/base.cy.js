/* eslint-disable no-undef */
describe("Base tests", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("/");
  });
  describe("The Discover Movies page", () => {
    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Discover Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
     // TODO
    });
  });
  describe("The Movie Details page", () => {
    // TODO
  });
});