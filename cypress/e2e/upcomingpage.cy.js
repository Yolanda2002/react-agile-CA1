/* eslint-disable no-undef */
let upcomingMovies;
let upcomingMovie; 

describe("Upcoming Movies Page Tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
    .its("body") 
    .then((response) => {
      upcomingMovies = response.results;
    });
  });
  beforeEach(() => {
    cy.visit("/movies/upcoming");
  });

  describe("The Upcoming Movies page", () => {
    it("displays the page header and the correct number of movies", () => {
      cy.get("h3").contains("Upcoming Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(upcomingMovies[index].title);
      });
    });
  });
  describe("The Movie Details page for the first upcoming movie", () => {
    before(() => {
      const firstUpcomingMovieId = upcomingMovies[0].id;
      cy.request(
        `https://api.themoviedb.org/3/movie/${firstUpcomingMovieId}?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((movieDetails) => {
          upcomingMovie = movieDetails;
        });
    });
    beforeEach(() => {
      const firstUpcomingMovieId = upcomingMovies[0].id;
      cy.visit(`/movies/${firstUpcomingMovieId}`);
    });
    it("displays the movie title, overview, and genres", () => {
      cy.get("h3").contains(upcomingMovie.title);
      cy.get("h3").contains("Overview");
      cy.get("h3").next().contains(upcomingMovie.overview);
      cy.get("p")
        .next()
        .within(() => {
          const genreChips = upcomingMovie.genres.map((g) => g.name);
          genreChips.unshift("Genres");
          cy.get("span").each(($chip, index) => {
            cy.wrap($chip).contains(genreChips[index]);
          });
        });
    });
  });
});

