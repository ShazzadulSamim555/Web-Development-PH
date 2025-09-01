// const numbers=[11,12,13,14,15,16];
// const doubled=[];
// // for(let i=0; i<numbers.length; i++){
// //     console.log(numbers[i])
// // }
// for(const number of numbers){
//     // console.log(number);
//     const double=number*2;
//     //console.log(double);
//     doubled.push(double)
// }
// console.log(doubled);


const numbers=[11,12,13,14,15,16];

const double=(number)=>number*2;
// const doubleit=numbers.map(double);
const doubleit= numbers.map( number=> number*2);
const fiveTimes= numbers.map( number=> number*5);
const squired= numbers.map(num=> num*num);

console.log(doubleit);
console.log(fiveTimes);
console.log(squired);


const friends=['asdr','hdkjnf','sdnudh','nduh','cmwirn'];
const length=friends.map(len=> len.length);
const first= friends.map(fst=>fst[0]);
console.log(length);
console.log(first); 