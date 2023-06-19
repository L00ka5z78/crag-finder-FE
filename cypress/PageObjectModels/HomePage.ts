import { dataTestId, getSelector } from './utils';

export const selectors = {
  signInButton: '[data-testid="home-test"] > div > :nth-child(1)',
  signUpButton: '[data-testid="home-test"] > div > :nth-child(2)',
  emailInput: '.email > .input-panel',
  passwordInput: '.undefined > .input-panel',
  loginBtn: 'button',
};

export class HomePagePageObject {
  navigateToPage() {
    cy.visit('/');
    return this;
  }

  typeEmail() {
    cy.get(selectors.emailInput).type('test@email.com');
  }

  typePassword() {
    cy.get(selectors.passwordInput).type('secretPwd123');
  }

  clickLoginBtn() {
    cy.get(selectors.loginBtn).click();
  }

  clickSignIn() {
    cy.get(selectors.signInButton).should('be.be.visible').click();
  }

  checkIsHomePage() {
    const url = Cypress.config('baseUrl');
    cy.url().should('be.equal', url + '/');
  }

  checkIsSignInPage() {
    const url = Cypress.config('baseUrl');
    cy.url().should('be.equal', url + '/sign-in');
  }

  checkIsSignInButton() {
    cy.get(selectors.signInButton).should('be.be.visible');
    return this;
  }

  checkIsSignUpButton() {
    cy.get(selectors.signUpButton).should('be.visible');
    return this;
  }
}
