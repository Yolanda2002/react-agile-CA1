# react-agile-CA1

# Assignment 1 - Agile Software Practice

Name: Jia Yang

Student Number: 20104736

This repository showcases the comprehensive implementation of a React application, along with its corresponding suite of Cypress end-to-end tests and a GitLab Continuous Integration (CI) pipeline.

## Details URL:

1. GitHub: https://github.com/Yolanda2002/react-agile-CA1
2. GitLab: https://gitlab.com/jiayang2/agile-ca
3. Youtube: https://youtu.be/NmNBYk5BhCY

## React App Features

- **Feature 1:** Filters

  Enhanced search functionality allowing users to filter movies by various criteria including genre, rating, and languages.

- **Feature 2:**  Top Rated Movies Page

  Added a new Top Rated Movies interface to give users access to the highest rated movies, as well as using the ability to add playlists and enter movie detail pages.

- **Feature 3:** Movie Details Design

  Optimize the design and functionality of movie detail pages.

- **Feature 4:** TV Shows Page

  Add TV Shows interface, integrate database and add language filters.

- **Feature 5:**  People Page

  Add People page to add the ability to filter by gender. Use cards to display movie stars with names and movies they have appeared in. Movies can be linked to jump to the movie details page.

## Automated Tests

- ### Unique functionality testing (if relevant).

  **Homepage** - The user will go to the homepage to get the details of the desired movie and be able to add it to the favorite list, which is displayed in the Favorite Movie Page, and can click the button to go to the Movie Details interface.

  - cypress/e2e/homepage.cy.js

  **Favourite Movie tagging** - The user can tag movies as their favourite, and those selected are listed on a separate page.

  - cypress/e2e/favouritepage.cy.js

  **Filtering Function** - Users can use filters to sift through the movies they want to watch, and can use the movie name, category, and my newly added language filter tags to find movies.

  - cypress/e2e/filtering.cy.js

  **Site Header** - By clicking on the site header, users can select the interface they want to go to and test whether the interface can be successfully accessed and display the correct URL.

  - cypress/e2e/siteHeader.cy.js

  **Top Rated Page** - Users can get the top rated movies on this interface, they are sorted in reverse order and can use the filtering feature to add to the playlist and show the movie details interface.

  - cypress/e2e/topratedpage.cy.js

  **TV Page** - Users can get the TV Series on this Page, to reduce code redundancy, I cleverly merged it into the movies page to reuse the template. In this test test if it can show the correct content of the TV Shows list.

  - cypress/e2e/tvpage.cy.js 

  **People Page** - In this page, users are able to see the introduction cards of celebrities, can jump to the Movie Details page by clicking on the movie links below, and can also filter actors by gender.

  - cypress/e2e/peoplepage.cy.js

  ### Error/Exception testing:

  - Display an error message when the movie details fail to load.
  - These tests are considered in the tests for each specific function and page and are not listed in a separate  test document.

### Cypress Custom Commands

Custom commands have been implemented to streamline the testing of repetitive actions across different test cases.

- Test files utilizing custom commands:
  - cypress/support/e2e.cy.js

### Branching Policy

In practice, for each feature and page, I am using a different branch for testing, and here is my elaboration on branching:

- main: The overall branch, responsible for the collection and basic operation of the project.

- develop: Specifically used for CI tests.

  - ​	basic-ci-config

  - ​	caching-in-ci

- bundling: Used for bundling and  code splitting.

- page tests: Testing of pages, where users independently test the functionality of certain pages.

  -   favouritepage-test

  -   filtering-test
  -   homepage-test

The reason for using such a branching strategy is that I want each branch to be able to do something that doesn't affect the overall code when a test goes wrong, and at the same time, I can assign permissions to avoid drastic changes in the whole project. At the same time, when observing, each branch has its own role, and can control each part of the operation more accurately.

### Code Spliting 

Code Spliting can be seen in the files:

- build\static\js

### Pull Requests

All the pull requests and code reviews for this assignment are documented on GitHub, which can be accessed at https://github.com/Yolanda2002/react-agile-CA1/commits/main. Alternatively, if GitLab was used, the merge requests are available within the GitLab project.

Details of the commit messages:

![Image text](https://github.com/Yolanda2002/react-agile-CA1/blob/be1eee260985a300957d6049d32eb37a4325265e/image/image-20231125203717077.png)