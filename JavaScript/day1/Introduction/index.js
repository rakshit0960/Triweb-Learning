let h1 = document.querySelector('h1');
let button = document.querySelector('button');


button.onclick = function() {
    if (h1.innerText === 'hi')
        h1.textContent = 'Hello World'
    else    
        h1.textContent = 'hi'
}

