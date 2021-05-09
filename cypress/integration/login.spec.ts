import { Login } from "../page-objects/login";
import { SideBar } from "../page-objects/side-bar";
import { PostPage } from "../page-objects/post-page";
import faker from "faker";
const login = new Login();
const sideBar = new SideBar();
const postPage = new PostPage();

describe("Should login and create a post with title succesfully", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  Cypress.Cookies.debug(true);
  
  it("should login the user", () => {
    login.visit();
    login.loginWithEnvUser();
    cy.url().should("include", "/#/site");
  });

  it("should go to posts", () => {
    if (sideBar.checkIfComponentExists()) {
      cy.log("theres sidebar");
      sideBar.goToPosts();
    }
  });

  it("should create a post with random title", () => {
    if (postPage.checkIfComponentExists()) {
      postPage.clickNewPost().fillTitle("Daniel").clickBack();
    }
  });
});
