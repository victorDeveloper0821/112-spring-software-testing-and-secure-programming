const { describe, it } = require('node:test');
const assert = require('assert');
const { Calculator } = require('./main');

/*
 * 測試 Calculator 的 exp 函數
 */
describe('Test function of Calculator exp(x) ',()=>{
    let calculator = new Calculator();

    it.skip('測試案例長這樣子',()=>{
        assert.equal(5,5);
    })
    const testCases = [
        { arg: 'string dummy', expectedError: 'unsupported operand type' },
        { arg: 1000000000, expectedError: 'overflow' },
        { arg: 30, expected: 'number' },
        { arg: 40, expected: 'number' },
        { arg: 50, expected: 'number' }
    ];

    testCases.forEach(({ arg, expected, expectedError }) => {
        const testType = expectedError ? 'error' : 'success';
        it(`exp(${arg}) should ${testType} - expect ${expected || expectedError}`, ()=> {
            if (expectedError) {
                assert.throws(() => calculator.exp(arg), new Error(expectedError));
            } else {
                const result = calculator.exp(arg);
                console.log('result is ' + result);
                assert.strictEqual(typeof result, expected);
            }
        });
    });
});

/*
 * 測試 Calculator 的 log 函數
 */
describe('Test function of Calculator log(x) ',()=>{
    let calculator = new Calculator();

    const testCases = [
        { arg: 'dummy', expectedError: 'unsupported operand type' },
        { arg: 0, expectedError: 'math domain error (1)' },
        { arg: -10, expectedError: 'math domain error (2)' },
        { arg: 87, expected: 'number' },
        { arg: 800, expected: 'number' },
        { arg: 9487, expected: 'number' }
    ];

    testCases.forEach(({ arg, expected, expectedError }) => {
        const testType = expectedError ? 'error' : 'success';
        it(`log(${arg}) should ${testType} - expect ${expected || expectedError}`, ()=> {
            if (expectedError) {
                assert.throws(() => calculator.log(arg), new Error(expectedError));
            } else {
                const result = calculator.log(arg);
                console.log('result is ' + result);
                assert.strictEqual(typeof result, expected);
            }
        });
    });
});