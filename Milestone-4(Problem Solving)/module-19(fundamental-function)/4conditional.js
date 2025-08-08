function even(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(even(10));
console.log(even(11));


function odd(given){
    if(given % 2 ===1){
        return true;
    }
    return false;
}
console.log(odd(10));
console.log(odd(7));