function sum(numbers){
    let total=0;
    for(let number of numbers){
        total +=number;

        console.log(number);
    }
    return total;

}
const result= sum([1,2,3,4,5]);
console.log(result);