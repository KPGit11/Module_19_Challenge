
describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('completes full quiz flow', () => {
    // Start quiz
    cy.get('[data-testid="start-button"]').click()

    // Answer all questions
    for(let i = 0; i < 10; i++) {
      cy.get('[data-testid="answer-button"]').first().click()
    }

    // Verify score display
    cy.get('[data-testid="score"]').should('be.visible')
  })
})
