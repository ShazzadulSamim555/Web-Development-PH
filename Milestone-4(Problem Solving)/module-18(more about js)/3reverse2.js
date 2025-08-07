const numbers=[11,22,33,44,55];

let Push=[];
let Pop=[];
let Shift=[];
let Unshift=[];

for(let i=0; i<numbers.length; i++){
    Push.push(numbers[i]);
    Pop.pop(numbers[i]);
    Shift.shift(numbers[i]);
    Unshift.unshift(numbers[i]);
}

console.log('Push:', Push);  //add element to the end of the array

console.log('Pop:', Pop);  //remove element from the end of the array

console.log('Shift:', Shift);  //remove element from the beginning of the array

console.log('Unshift:', Unshift);  //add element to the beginning of the array
