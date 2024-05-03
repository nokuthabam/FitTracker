// sample.test.js

// Import the function to be tested
const { add } = require('../math'); // Assuming you have a math.js file with an add function

// Test suite for the add function
describe('add function', () => {
  // Test case to verify addition of two positive numbers
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  // Test case to verify addition of a positive and a negative number
  test('adds -1 + 2 to equal 1', () => {
    expect(add(-1, 2)).toBe(1);
  });

  // Test case to verify addition of two negative numbers
  test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
