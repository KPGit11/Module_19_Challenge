describe('Quiz Component', () => {
  beforeEach(() => {
    cy.mount(<Quiz />)
  })

  it('should render the start button', () => {
    cy.get('[data-testid="start-button"]').should('exist')
  })

  it('should start quiz when clicking start button', () => {
    cy.get('[data-testid="start-button"]').click()
    cy.get('[data-testid="question"]').should('be.visible')
  })
})
