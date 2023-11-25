/* eslint-disable no-undef */
let popularPeople;
;

describe("People Page Tests", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")
            .then((response) => {
                popularPeople = response.results
            });
    });

    beforeEach(() => {
        cy.visit("/movies/people");
    });

    it("displays the page header", () => {
        cy.get("h4").contains("People");
        cy.get(".MuiGrid-container").find(".MuiGrid-item").should("have.length.at.least", 1);
    });

    it("displays the correct number of people cards", () => {
        cy.get(".MuiCard-root").should("have.length", popularPeople.length);
    });

    it("displays the correct names on people cards", () => {
        cy.get(".MuiCard-root").each(($card, index) => {
            cy.wrap($card).contains(popularPeople[index].name);
        });
    });


});
describe("The Person Details page for the first popular person", () => {
    let firstPopularPerson;

    before(() => {
        const firstPopularPersonId = popularPeople[0].id;
        cy.request(
            `https://api.themoviedb.org/3/person/${firstPopularPersonId}?api_key=${Cypress.env("TMDB_KEY")}`
        )
            .its("body")
            .then((personDetails) => {
                firstPopularPerson = personDetails;
            });
    });

    beforeEach(() => {
        const firstPopularPersonId = popularPeople[0].id;
        cy.visit(`/person/${firstPopularPersonId}`);
    });

    it("displays the person's name and known for titles", () => {
        if (firstPopularPerson && firstPopularPerson.known_for) {
            firstPopularPerson.known_for.forEach((movie, index) => {
                cy.get("p").eq(index).contains(movie.title);
            });
        }
    });
});

