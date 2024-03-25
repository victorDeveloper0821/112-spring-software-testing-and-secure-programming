// 建立了名為 Calculator 的類別
class Calculator {
    // exp 函數
    // x - 變數 (可以是數字、非數字資料)
    exp(x) {
        // 如果 x 不是一個有限的数字（比如是文字或者太大的數值），丟出錯誤並結束函數執行
        if (!Number.isFinite(x)) {
            throw Error('unsupported operand type');
        }
        // 進行 exp 運算並將結果儲存於 result 變數
        const result = Math.exp(x);
        // 如果 result 為無限大進入此判斷，丟出錯誤並結束函數執行
        if (result === Infinity) {
            throw Error('overflow');
        }
        // 回傳 Math.exp 於 result 中的運算結果
        return result;
    }

    // log 函數
    // x - 變數 (可以是數字、非數字資料)
    log(x) {
        // 如果 x 非數字且數字為無限大進入此判斷，丟出錯誤並結束函數執行
        if (!Number.isFinite(x)) {
            throw Error('unsupported operand type');
        }
        // 進行 log 運算並將結果儲存於 result 變數
        const result = Math.log(x);

         // 如果 result 為無限大進入此判斷，丟出錯誤並結束函數執行
        if (result === -Infinity) {
            throw Error('math domain error (1)');
        }
         // 如果 result 結果為非數值，丟出錯誤並結束函數執行
        if (Number.isNaN(result)) {
            throw Error('math domain error (2)');
        }
        // 回傳 Math.log 於 result 中的運算結果
        return result;
    }
}
// 下面是程式執行範例
// --------------------------------
// const calculator = new Calculator();
// console.log(calculator.exp(87));
// console.log(calculator.log(48763));

// 讓其他文件可以使用 Calculator 這個類別。
module.exports = {
    Calculator
};