import { Login } from "../page-objects/login";
import { SideBar } from "../page-objects/side-bar"
const login = new Login();
const sideBar = new SideBar

it("log user into the platform", () => {
  login.visit()
  .fillEmail()
  .fillPassword()
  .clickLoginButton();

  if(sideBar.checkIfComponentExists()){
      cy.log("theres sidebar")
      sideBar.goToPosts()
  }
  
});
