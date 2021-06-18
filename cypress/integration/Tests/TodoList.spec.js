describe("E2E Tests for simple TODO List Web App", () => {
    before(() => {
        cy.visit("/");
    });
    beforeEach(() => {
        cy.fixture("data").then(function (data) {
            this.data = data;
        });
    });

    it("Add one ToDo list, verify added in the list and ToDo list count", function() {
        cy.get('[type="text"]').type(this.data.oneProduct);
        cy.get('[type="submit"]').click();
        cy.get('label.ng-binding').should("contain.text", this.data.oneProduct);
        cy.get('span.label').should("have.text", 1);
    });

    it("Delete the added ToDo list, verify it is removed and verify the list count", () => {
        cy.get('label.ng-binding').click();
        cy.get('span.label').should("have.text", 0);
    });

    it('Add multiple ToDo and verify', function(){
        cy.addMultipleToDo(this.data.multipleProduct)
        cy.verifyMultipleToDo(this.data.multipleProduct)
    });

    it('Delete multiple ToDo and verify it is removed and verify the list count', function(){
        cy.removeMultipleToDo(this.data.multipleProduct)
        cy.get('span.label').should("have.text", 0);
    })
});
