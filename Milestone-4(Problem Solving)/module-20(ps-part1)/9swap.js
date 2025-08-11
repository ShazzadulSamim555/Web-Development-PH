let a=10;
let b=20;
let temp;

console.log(a,b);
temp = a;
a=b;
b=temp;
console.log(a,b);

//Destructuring
let num1=55;
let num2=66;
[num1,num2] = [num2,num1];
console.log(num1,num2);
