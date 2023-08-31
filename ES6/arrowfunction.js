const add = (num1, num2) => {
    console.log(this);
    return num1 + num2;
}

console.log(add(1, 3));



const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

const arr2 = arr.map(item => item * 2);

console.log(arr2);


const retObj = (uname, age) => {return {userName: uname, age: age}};