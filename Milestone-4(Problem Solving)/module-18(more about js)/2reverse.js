const numbers=[10,20,30,40,50];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log('------------------');

for(let i=numbers.length -1; i>=0; i-- ){
    console.log(numbers[i]);
}

console.log('------------------');

for(let i=0 ; i<numbers.length; i++){
    console.log(numbers[numbers.length - 1 - i]);
}


