function addNumbers() {
    let sum = 0;
    Array.from(arguments).forEach(element => {
        sum += element;
    })
    console.log(sum);
}


addNumbers(2, 3, 4, 5, 6);