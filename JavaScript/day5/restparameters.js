function multipleArguments(multiplier, ...numbers) {
    console.log(numbers);
    numbers.forEach(num => console.log(num * multiplier))
}

multipleArguments(multiplier = 2, 2, 3, 4, 5, 6)