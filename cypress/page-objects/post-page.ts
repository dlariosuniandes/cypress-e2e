import * as cypress from "cypress";
import { getSyntheticLeadingComments } from "typescript";

export class PostPage {
  checkIfComponentExists(): Cypress.Chainable<boolean> {
    return cy.get(".post-header").then((selectedElement) => {
      if (selectedElement) return true;
      return false;
    });
  }
  clickNewPost() {
    cy.contains("New post").click();
    return this;
  }

  fillTitle(title: string) {
    cy.get('[placeholder="Post Title"]').type(`${title}{enter}`, {
      waitForAnimations: true,
    })
    return this;
  }

  fillContent() {
    cy.get('[contenteditable="true"]').click()
    return this;
  }

  clickBack() {
    cy.go("back")
    return this;
  }
}
