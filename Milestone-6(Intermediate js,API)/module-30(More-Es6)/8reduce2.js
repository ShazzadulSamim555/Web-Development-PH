const numbers = [85, 47, 84, 51, 56, 32, 65];
// let largest = numbers[0];
// for (let number of numbers) {
//     if (number > largest) {
//         largest = number;
//     }
// }
// console.log(largest);

const largest= numbers.reduce((acc,crr) => acc>crr ? acc : crr);
console.log(largest);