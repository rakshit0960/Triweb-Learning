let n = 10;

for (let i = 0; i <= 10; i++) {
    if (n == 10) break;
    console.log('hello')
}



for (let i = 1; i <= 10; i++) {
    if (i == 10) continue;
    console.log(i);
}


for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);

        if (j == 3) 
            break;
    }
}


outer:
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);

        if (j == 3) 
            break outer;
    }
}