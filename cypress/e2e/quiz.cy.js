describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('/')
    // Increase initial wait time and add command timeout
    cy.wait(2000)
  })

  it('completes full quiz flow', () => {
    // More specific selector with longer timeout
    cy.get('button', { timeout: 10000 })
      .should('be.visible')
      .contains(/start|begin|start quiz/i)
      .click()

    // Answer all questions
    for (let i = 0; i < 10; i++) {
      cy.get('button', { timeout: 5000 })
        .should('be.visible')
        .first()
        .click()
      cy.wait(1000)
    }

    cy.contains(/score|result|final score/i, { timeout: 5000 })
      .should('be.visible')
  })
})
