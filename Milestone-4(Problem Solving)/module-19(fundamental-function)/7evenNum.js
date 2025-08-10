function evenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number %2 === 0){
            console.log("Even number: ",number);
            sum +=number;
        }
    }
    console.log(sum);
    return sum;
}

const numbers= [11,22,33,44,55,66];
console.log(evenNumbers(numbers));