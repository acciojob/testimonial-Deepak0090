//your JS code here. If required.
() => {
    cy.get('h1').should('have.length', 1);  // Only one <h1> element
    cy.get('.testimonial').should('have.length', 3);  // There are 3 testimonial divs
    cy.get('p').should('have.length', 6);  // There are 6 <p> elements (3 testimonial text + 3 author)
}
