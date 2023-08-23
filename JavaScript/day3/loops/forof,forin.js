let obj = {
    name: "india",
    code: "91"
}

for (const key in obj) {
    console.log(obj[key])
}



const arr = [1, 2, 43, 23, 13];

for (let element of arr) {
    console.log(element);
}


arr.forEach((elem) => {
    console.log(elem);
})