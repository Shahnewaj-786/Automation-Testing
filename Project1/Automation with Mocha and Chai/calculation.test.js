// description: Sumation of 2 numbers
// execution: expected = 6, actual = 5
// assertion: true e=a, false e != a 

const {expect} = require ('chai');

describe ("Calculation testing", function (){
    it ("Sum of two numbers", function(){

        let num1 = 10;
        let num2 = 20;
        let expectedValue = 30;
        let actualValue = num1+num2;

        expect(expectedValue).equal(actualValue);
    });

    it ("Sub of two numbers", function(){

        let num1 = 10;
        let num2 = 20;
        let expectedValue = 300;
        let actualValue = num1-num2;

        expect(expectedValue).equal(actualValue);
    });
});