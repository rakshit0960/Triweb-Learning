try {
    console.log(x); // reference error
    console.log('inside try block');
} catch(error) {
    console.log('inside catch block')
} finally {
    console.log('inside finally block');
}


try {
    throw new Error("Example Error");
    console.log('inside try block');
} catch(error) {
    console.log('inside catch block')
}