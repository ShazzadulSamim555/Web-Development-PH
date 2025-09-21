// console.log('one');
// console.log('two');
// setInterval(() => {
//     console.log('three')
// }, 2000);
// console.log('four');
// console.log('five');

let count=0;
const intervalId= setInterval(() => {
    console.log(count++);
    if(count > 10){
        clearInterval(intervalId);
    }
}, 1000);
console.log('Interval Id', intervalId);