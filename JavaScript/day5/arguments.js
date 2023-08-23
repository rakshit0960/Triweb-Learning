function addNumbers(a) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element;
    }
    console.log(sum);
}

addNumbers(1, 2, 3, 5);  