describe('App', () => {
    before(() => {
        cy.visit('/');
    })

    it('render', () => {
        cy.get('[data-testid="app"]').should('be.visible');
    });

    it('clicking Send button renders response', () => {
        /* eslint-disable jest/valid-expect-in-promise */
        cy.window()
            .then((window) => {
                const { worker, rest } = (window as any).msw;
                
                worker.use(
                    rest.post('/api/results', (req, res, ctx) => {
                        const body = JSON.parse(req.body)

                        return res(
                            ctx.status(200),
                            ctx.json({
                                results: [
                                    { id: 1, name: 'John' },
                                    { id: 2, name: 'Bill' },
                                    { id: 2, name: body.message },
                                ]
                            })
                        );
                    }),
                );
            });

        cy.get('button').contains('Send').click();
    });

    it('clicking Send 2 button renders response', () => {
        cy.window()
            .then((window) => {
                // Reference global instances set in "src/mocks.js".
                const { worker, rest } = (window as any).msw;

                worker.use(
                    rest.get('/api/unhandled', (req, res, ctx) => {
                        return res(
                            ctx.status(200),
                            ctx.json({
                                results: [
                                    { id: 1, name: 'John' },
                                    { id: 2, name: 'Bill' },
                                ]
                            })
                        );
                    }),
                );
            });

        cy.get('button').contains('Send 2').click();
    });
})