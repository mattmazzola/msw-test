import { setupWorker, rest } from 'msw';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

(globalThis as any).msw = {
    worker,
    rest,
};