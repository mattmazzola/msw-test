import { rest } from 'msw';

export const handlers = [
    // Handles a POST /login request
    rest.post('/api/results', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json({
                results: [
                    { id: 1, name: 'John' },
                    { id: 1, name: 'Bill' },
                ]
            })
        );
    }),
];