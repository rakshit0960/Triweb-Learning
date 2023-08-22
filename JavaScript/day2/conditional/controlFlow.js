//Block Statement
if (true) {
    let x = 1;
    console.log(x);
}


// conditional
let n1 = 5;
let n2 = 4;

if (n1 < n2) {
    console.log('n2 is grater');
} else {
    console.log('n2 is not grater');
}


// false - false
// null - false
// 0 - false
// "" - false
// NaN - false  


// switch statements

let dayNum = 0;

switch (dayNum) {

    case 0:
        console.log("Sunday")
        break;

    case 1:
        console.log("Monday") 
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("thursday");
        break;

    case 5:
        console.log("Friday")
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Enter number between 8-6");
        break;

}


let day = 0;

switch(day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('working day');
        break;
    
    case 0:
    case 6:
        console.log('weekend');
        break;

    default:
        console.log("Enter number between 8-6");
        break;
}