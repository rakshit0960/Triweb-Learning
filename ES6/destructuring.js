function getStudent() {
    return {
        name: 'abc',
        age: 32,
        grade: 'CSE'
    }
}
    
let {name:eName, age, grade} = getStudent();

console.log(eName, age, grade)