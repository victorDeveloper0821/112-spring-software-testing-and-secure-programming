// 引入 node.js 單元測試專用套件
const { describe, it, default: test } = require('node:test');
// 引入 node.js 斷言，驗證執行結果是否如預期
const assert = require('assert');
// 我們要測試的程式在這邊引入
const { Calculator } = require('./main');

/*
    測試 Calculator 的 exp 函數
    describe: 測試一系列案例
    參數一：測試案例的名稱(可以自己取名)
    參數二: 測試案例執行function (這邊用於執行測試相關其他測試案例)
 */
describe('Test function of Calculator exp(x) ',function(){
    // 初始化 Calculator 這個物件
    let calculator = new Calculator();

    // 制定變數 testCases 用於儲存測試案例的參數與結果
    const testCases = [
    /*
        arg: 用於運算的參數
        expected: 預期出現的結果文字
        error: 是否預期程式會出錯 (true/false)
     */
        { arg: 'string dummy', expected: 'unsupported operand type', error:true },
        { arg: 1000000000, expected: 'overflow',error:true },
        { arg: 30, expected: 'number', error:false },
        { arg: 40, expected: 'number', error:false },
        { arg: 50, expected: 'number', error:false }
    ];

    // 用迴圈新增測試案例
    for(let i = 0; i<testCases.length;i++){
        // 判斷是否進入測試失敗案例
        if(testCases[i].error){
            // 新增測試失敗案例
            // 參數一: 測試案例的名稱(可以自己取名)
            // 參數二: 測試案例執行function (運算的結果應該如預期)
            it('測試案例 '+i , function() {
                // 預期程式執行會出現錯誤
                assert.throws(function(){calculator.exp(testCases[i].arg)}, new Error(testCases[i].expected));
            }); 
        }else{
            // 新增測試成功案例
            // 參數一: 測試案例的名稱(可以自己取名)
            // 參數二: 測試案例執行function (運算的結果應該如預期)
            it('測試案例 '+i, function() {
                // 取得運算數值結果
                const result = calculator.exp(testCases[i].arg);
                // 顯示運算結果
                console.log('result is ' + result);
                // 預期 result 是一個數字
                assert.strictEqual(typeof result, testCases[i].expected);
            });
        }
    }
});

/*
    測試 Calculator 的 log 函數
    describe: 測試一系列案例
    參數一：測試案例的名稱(可以自己取名)
    參數二: 測試案例執行function (這邊用於執行測試相關其他測試案例)
 */
describe('Test function of Calculator log(x) ', function() {
    // 初始化 Calculator 這個物件
    let calculator = new Calculator();

    // 制定變數 testCases 用於儲存測試案例的參數與結果
    const testCases = [
    /*
        arg: 用於運算的參數
        expected: 預期出現的結果文字
        error: 是否預期程式會出錯 (true/false)
     */
        { arg: 'dummy', expected: 'unsupported operand type', error: true }, 
        { arg: 0, expected: 'math domain error (1)', error: true },
        { arg: -10, expected: 'math domain error (2)', error: true },
        { arg: 87, expected: 'number', error: false },
        { arg: 800, expected: 'number', error: false },
        { arg: 9487, expected: 'number', error: false }
    ];

    // 用迴圈新增測試案例
    for(let i = 0; i < testCases.length; i++) {
        // 判斷是否進入測試失敗案例
        if(testCases[i].error) {
            // 新增測試失敗案例
            // 參數一: 測試案例的名稱(可以自己取名)
            // 參數二: 測試案例執行function (運算的結果應該如預期)
            it('測試案例 ' + i, function() {
                // 預期程式執行會出現錯誤，且錯誤訊息如同案例的預期
                assert.throws(function() { calculator.log(testCases[i].arg); }, new Error(testCases[i].expected));
            });
        } else {
            // 新增測試成功案例
            // 參數一: 測試案例的名稱(可以自己取名)
            // 參數二: 測試案例執行function (運算的結果應該如預期)
            it('測試案例 ' + i, function() {
                // 取得運算數值結果
                const result = calculator.log(testCases[i].arg);
                // 顯示運算結果
                console.log('result is ' + result);
                // 預期 result 是一個數字(運算結果同 expected )
                assert.strictEqual(typeof result, testCases[i].expected);
            });
        }
    }
});
