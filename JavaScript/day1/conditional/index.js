let x = 10;
let y = 55;
let z = 3;

if (x > z) {
    console.log('x is grater than y');
    if (x > z) {
        console.log('x is grater than all');
    } else {
        console.log('z is grater than all');
    }
} else {
    console.log('y is grater than x');
    if (y > z) {
        console.log('y is grater than all');
    } else {
        console.log('z is grater than all')
    }
}