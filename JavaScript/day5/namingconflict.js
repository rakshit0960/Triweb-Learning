function outer(num) {
    let x = 5;
    function inner(x) {
        let num = 8;
        console.log(x)
        console.log(num) // local variable num is used
    }
    inner(7);
}

outer(3);