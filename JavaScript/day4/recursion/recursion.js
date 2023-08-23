function printNumSeries(num) {
    for (let i = 1; i < num; i++) 
        console.log(i);
}

printNumSeries(10);


console.log('recursive:-');
function printNumSeriesRecursive(num) {
    if (num == 0) return;
    printNumSeries(num - 1);
    console.log(num);
}

printNumSeriesRecursive(10);

console.log('recursive method2:-');
const printSeriesR =  function printNumSeriesRecursive(num) {
    if (num == 0) return;
    printNumSeries(num - 1);
    console.log(num);
}

printSeriesR(10);


console.log('recursive method3:-');
const printSeriesR2 =  function printNumSeriesRecursive(num) {
    if (num == 0) return;
    console.log(num);
    arguments.callee(num - 1);
}

printSeriesR2(10);