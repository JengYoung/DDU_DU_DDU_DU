import { server } from './src/mocks/server'
import '@testing-library/jest-dom/extend-expect'

const matchers = require('jest-extended');
expect.extend(matchers);

afterEach(() => {
  jest.useRealTimers();
});

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())