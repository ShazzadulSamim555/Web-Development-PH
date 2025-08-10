function oddAverage(numbers){
    let sumArray = []
    let sum= 0;
    console.log(numbers);
    for(const number of numbers){
        if(number %2 !== 0){
            sumArray.push(number);
            sum += number
        }
    }
    console.log(sumArray);
    let average= sum / sumArray.length;
    return average.toFixed(2);
}
const Numbers= [11,24,36,25,8,65,99,45,85,24,16,74];
console.log("Odd Average: ", oddAverage(Numbers));