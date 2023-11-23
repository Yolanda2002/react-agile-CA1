/* eslint-disable no-undef */
let topRatedMovies;

describe("Top Rated Movies Page Tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
    .its("body")
    .then((response) => {
      topRatedMovies = response.results;
    });
  });

  beforeEach(() => {
    cy.visit("/movies/toprated");
  });

  it("displays the page header for top rated movies", () => {
    cy.get("h3").contains("Top Rated Movies");
  });

  it("displays the correct number of top rated movies", () => {
    cy.get(".MuiCardHeader-root").should("have.length", topRatedMovies.length);
  });

  it("displays the correct movie titles for top rated movies", () => {
    cy.get(".MuiCardHeader-content").each(($card, index) => {
      cy.wrap($card).find("p").contains(topRatedMovies[index].title);
    });
  });

  
});
