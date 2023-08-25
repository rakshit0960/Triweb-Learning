let x = 2 / 'r';
console.log(x);

if (Number.isNaN(x)) 
    console.log('n in not a number');
else    
    console.log('x is a number');




let xSafe = 1242141343251252134

console.log('is safe ', Number.isSafeInteger(xSafe));