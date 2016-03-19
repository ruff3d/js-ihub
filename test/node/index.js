var calc = require('./calculator.js');

//calc = new calculator();

function calculator(expr) {
    if (typeof expr == 'string')
        try {
            return calc(expr);
        } catch(e) {
            return 'Error: "' + expr + '" is not valid expression.';
        }
    else return 'TypeError: Expression should be a string.';
}


console.log(calculator('40 + 2')); // 42
//
console.log(calculator(123)); // TypeError: Expression should be a string.
//
console.log(calculator('40 + hello')); // Error: "40 + hello" is not valid expression.


