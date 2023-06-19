/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { HomePagePageObject } from '../PageObjectModels/HomePage';

// Cypress.Commands.add('login', (email: string, password: string) => { ...
// })
//

Cypress.Commands.add('home', () => {
  const homePO = new HomePagePageObject();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;

      home(url: string): Chainable<Element>;
    }
  }
}
