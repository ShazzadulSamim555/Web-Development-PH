const numbers=[85,47,84,51,56,32,65];

// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     sum=sum+numbers[i];
// }
// console.log(sum);

let sum=numbers.reduce((acc,crr) => acc+crr, 0);
console.log(sum);