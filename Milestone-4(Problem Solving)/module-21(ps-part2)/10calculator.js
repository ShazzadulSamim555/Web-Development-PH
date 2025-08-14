function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return "Division by zero error";
    }
    return a/b;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'subtract'){
        const result= subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result= multiply(a,b);
        return result;
    }
    else if(operation === 'divide'){
        const result= divide(a,b);
        return result;
    }
}

const result = calculator(10,5, 'subtract');
console.log("result",result);