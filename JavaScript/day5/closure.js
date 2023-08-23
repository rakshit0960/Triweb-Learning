function getProduct(multiplier){

    return function(num) {
        return num * multiplier;
    }

}
    
let double = getProduct(2);
console.log(double(5));
    
let triple = getProduct(3);
console.log(triple(5));
    
let quad = getProduct(4);
console.log(quad(5));