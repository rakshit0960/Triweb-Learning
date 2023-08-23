let decideFunc = 'add';
// let decideFunc = 'subtract';

let getResult;
if (decideFunc == 'add') {
    getResult = function(num1, num2) {return num1 + num2}
} else {
    getResult = function(num1, num2) {return num1 +- num2}
}


// call
console.log(getResult(5, 3));