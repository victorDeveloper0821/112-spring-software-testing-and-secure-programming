const { describe, it } = require('node:test');
const assert = require('assert');
const { Calculator } = require('./main');

// TODO: write your tests here

/*
 * 測試 Calculator 的 exp 函數
 */
describe('Test function of Calculator exp(x) ',()=>{
    // initialize Calculator class there
    let calculator = new Calculator()

    // test case 1
    it('Parameter is not a number',()=> {
        try{
            let result = calculator.exp('string dummy')
        }catch(error){
            assert.equal('unsupported operand type',error.message)
        }
    })

    // test case 2
    it('number is overflow',()=> {
        try{
            let result = calculator.exp(1000000000)
        }catch(error){
            assert.equal('overflow',error.message)
        }
    })

    // test case 3
    it('return a number',()=> {
        let result = calculator.exp(87)
        console.log('result is '+result)
        assert.equal(false, Number.isNaN(result))
    })

})

/*
 * 測試 Calculator 的 log 函數
 */
describe('Test function of Calculator log(x) ',()=>{
    // initialize Calculator class there
    let calculator = new Calculator()

    // test case 1
    it('Parameter is not a number',()=> {
        let dummy = 'dummy'
        assert.throws(function(){calculator.log(dummy)},Error)
        assert.throws(function(){calculator.log(dummy)},{message:'unsupported operand type'})
    })

    // test case 2
    it('number is infinity',()=> {
        try{
            let result = calculator.log(0)
        }catch(error){
            assert.equal('math domain error (1)',error.message)
        }
    })

    // test case 3
    it('Math.log is not a number ',()=> {
        try{
            let result = calculator.log(-10)
        }catch(error){
            assert.equal('math domain error (2)',error.message)
        }
    })

    // test case 4
    it('return a number',()=> {
        let result = calculator.log(87)
        console.log('result is '+result)
        assert.equal(false, Number.isNaN(result))
    })

})