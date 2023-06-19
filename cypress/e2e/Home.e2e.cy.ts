import { HomePagePageObject } from '../PageObjectModels/HomePage';

describe('Home page', () => {
  const HomePO = new HomePagePageObject();

  beforeEach(() => {
    HomePO.navigateToPage();
  });
  it('should render home page', () => {
    HomePO.checkIsHomePage();
  });

  it('should have sign in button rendered', () => {
    HomePO.checkIsSignInButton();
  });

  it('should have sign up button rendered', () => {
    HomePO.checkIsSignUpButton();
  });

  it('should go to sign in page after sign in button is clicked', () => {
    HomePO.clickSignIn();
    HomePO.checkIsSignInPage();
  });

  it('should login', () => {
    HomePO.clickSignIn();
    HomePO.typeEmail();
    HomePO.typePassword();
    HomePO.clickLoginBtn();
    //     write here E2E tests for welcome message :)
  });
});
