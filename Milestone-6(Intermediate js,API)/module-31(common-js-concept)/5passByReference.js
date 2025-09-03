let num1={name: 'Rakib', age:22};
let num2=num1; //Pass by reference // reference copied

num2.name='Shakib';

console.log(num1); //shakib
console.log(num2); //shakib

//by using spread operator/////////////////////
let num3=[5,2,4,8,9,6,5,4];
let num4=[...num3];  ///reference is copied by using spread operator

num4.push(50);

console.log(num3);  // [5,2,4,8,9,6,5,4]
console.log(num4);  // [5,2,4,8,9,6,5,4,50]