function updatedName(student) {
    student.name = `Hi ${student.name}`;
    console.log(student);
}


let obj = {name: "Abc"}
updatedName(obj)

console.log(obj)





function addOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i]++;
    }
}

const arr = [1, 2, 3, 4, 5, 6]
console.log('before:', arr);
addOne(arr);
console.log('after:', arr);
