function singleNumber(numbers){
    let  unique=[];
    for(const number of numbers){
        if(unique.includes(number) === false){
            unique.push(number);
        }
    }
    return unique;
}

const Numbers=[101,102,103,101,105,106,103,107,108,105,106];
console.log("Unique Id: ",singleNumber(Numbers));