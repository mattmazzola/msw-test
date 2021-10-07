# MSW + Cypress + Typescript

Instead of defining static handlers in the source files. Only load MSW and start server in source and define the handler in the test files.
This keeps all mocking inside the tests and not split across test and source code.

## Links:

- https://mswjs.io/docs/getting-started/integrate/browser
- https://mswjs.io/docs/api/setup-worker/use#runtime-request-handler
- https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript
- https://docs.cypress.io/guides/getting-started/testing-your-app#Step-3-Configure-Cypress