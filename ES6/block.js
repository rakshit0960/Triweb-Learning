let a = 1 // global scope


for (let i = 0; i < 100; i++) {
    let x = 10; // local scope
}

let x;
{
    var n = 5;
    x = 7;
}

console.log(n);
console.log(x);