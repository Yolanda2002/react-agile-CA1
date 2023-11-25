/* eslint-disable no-undef */
let tvShows;
let tvShowDetails;

describe("TV Shows Page Tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
    .its("body")
    .then((response) => {
      tvShows = response.results;
    });
  });
  beforeEach(() => {
    cy.visit("/movies/tv");
  });

  describe("The Popular TV Shows page", () => {
    it("displays the page header and the correct number of shows", () => {
      cy.get("h3").contains("TV Shows");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct TV show titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(tvShows[index].name);
      });
    });
  });
});

// Added Bundling Branch.