const country='Bangladesh';
const district="Cumilla";
const thana= `Barura`;

console.log(country.length);
console.log(district.length);
console.log(thana.length);

//string is immutable- can't be changes
console.log(country[3]);
country[3]='c';
console.log(country);


//but number array is mutable- 

let numbers=[1,2,3,4,5];
numbers[2]=20;
console.log(numbers);
