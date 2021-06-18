describe('Verify all the elements in ToDo page', () => {
    before(() => {
        cy.visit('/')
    });
    it('Verify the heading of the page', () => {
        cy.get('h1').should('contain.text', 'Simple ToDo List')
    });
    it('Verify the page title', () => {
        cy.title().should('eq', 'Node/Angular Todo App')
    });
    it('Verify the text field is available with place holder', ()=>{
        cy.get('[type="text"]').should('be.visible').and('have.attr','placeholder', 'Get Milk' )
    })
    it('Verify Add button is available', () => {
        cy.get('[type="submit"]').should('be.visible')
    });
});