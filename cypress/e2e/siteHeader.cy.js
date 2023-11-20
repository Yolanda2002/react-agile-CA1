/* eslint-disable no-undef */
describe('Site Header Navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should navigate to the home page when clicking the Home button', () => {
      cy.contains('button', 'Home').click();
      cy.url().should('eq', Cypress.config().baseUrl );
    });
  
    it('should navigate to the favorites movies page when clicking the Favorites button', () => {
      cy.contains('button', 'Favorites').click();
      cy.url().should('include', '/movies/favorites');
    });
  
    it('should navigate to the upcoming movies page when clicking the Upcoming button', () => {
      cy.contains('button', 'Upcoming').click();
      cy.url().should('include', '/movies/upcoming');
    });
  
    it('should navigate to the top rated movies page when clicking the Top Rated button', () => {
      cy.contains('button', 'Top Rated').click();
      cy.url().should('include', '/movies/toprated');
    });
  
    it('should navigate to the TV shows page when clicking the TV Selected button', () => {
      cy.contains('button', 'TV Selected').click();
      cy.url().should('include', '/movies/tv');
    });
  
    it('should navigate to the famous people page when clicking the Famous People button', () => {
      cy.contains('button', 'Famous People').click();
      cy.url().should('include', '/movies/people');
    });
  });
  