console.log('one');
console.log('two');
setTimeout(() => {
    for(let i=0; i<10000; i++){
    console.log(i);
}
}, 5000);
console.log('four');
console.log('five');