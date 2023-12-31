// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

export const filterByTitle = (movieList, string) =>
    movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

export const filterByGenre = (movieList, genreId) =>
    movieList.filter((m) => m.genre_ids.includes(genreId));

export const filterByGenreAndTitle = (movieList, genreId, string) =>
    movieList.filter((m) => (m.genre_ids.includes(genreId) && m.title.toLowerCase().search(string) !== -1));

export const filterByLanguage = (movieList, languageCode) =>
    movieList.filter((m) => m.original_language === languageCode);

export const filterByGender = (peopleList, gender) => {
    let genderNumber;
    if (gender === 'male') {
        genderNumber = 2;
    } else if (gender === 'female') {
        genderNumber = 1;
    }
    return peopleList.filter((p) => {
        return gender === 'all' || p.gender === genderNumber;
    });
};
