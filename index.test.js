const tests = require('./index');

// Test 1
describe('stringLength', () => {
  test('"come" to have length 4', () => {
    expect(tests.stringLength('come')).toBe(4);
  });
  test('string is at least 1 character long', () => {
    expect(tests.stringLength('come')).not.toBeNull();
  });
  test('string not longer than 10 characters', () => {
    expect(() => tests.stringLength('comeernigsw')).toThrow();
  });
});

// Test 2
describe('reverseString', () => {
  test('come = emoc', () => {
    expect(tests.reverseString('come')).toMatch(/emoc/);
  });
});

// Test 3
describe('сalculator Add', () => {
  test('1 + 2 = 3', () => {
    expect(tests.calculator.add(1, 2)).toEqual(3);
  });
  test('is number', () => {
    expect(tests.calculator.add(10, 2)).toBeGreaterThanOrEqual(0);
  });
  test('is not empty', () => {
    expect(tests.calculator.add(1, 2)).not.toBeNull();
  });
});

describe('сalculator Subtract', () => {
  test('2 - 1 = 1', () => {
    expect(tests.calculator.subtract(2, 1)).toEqual(1);
  });
  test('is number', () => {
    expect(tests.calculator.subtract(10, 2)).toBeGreaterThanOrEqual(0);
  });
  test('is not empty', () => {
    expect(tests.calculator.subtract(1, 2)).not.toBeNull();
  });
});

describe('сalculator Divide', () => {
  test('4 / 2 = 2', () => {
    expect(tests.calculator.divide(4, 2)).toEqual(2);
  });
  test('is number', () => {
    expect(tests.calculator.divide(10, 2)).toBeGreaterThanOrEqual(0);
  });
  test('is not empty', () => {
    expect(tests.calculator.divide(1, 2)).not.toBeNull();
  });
});

describe('сalculator Multiply', () => {
  test('2 * 2 = 4', () => {
    expect(tests.calculator.multiply(2, 2)).toEqual(4);
  });
  test('is number', () => {
    expect(tests.calculator.multiply(10, 2)).toBeGreaterThan(10);
  });
  test('is not empty', () => {
    expect(tests.calculator.multiply(1, 2)).not.toBeNull();
  });
});

// Test 4
describe('capitalize', () => {
  test('yasin = Yasin', () => {
    expect(tests.capitalize('yasin')).toMatch(/Yasin/);
  });
});
