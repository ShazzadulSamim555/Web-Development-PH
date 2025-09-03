//Primitive values
function multifly(a,b){
    a=a+5;
    b=b+3;
    const mult= a*b;
    return mult;
}

let x=5;
let y=7;

console.log('Before function call:',x,y);
const result= multifly(x,y);
console.log(result);
console.log('After function call:',x,y);


//Non-Primitive values (array,object) are passed by reference
const manik={name:'Manik',salary:15000};
const rakib={name:"Rakib", salary:20000};

console.log('Before function:', manik.balance , rakib.balance);

function totalMoney(per1,per2){
    manik.salary=0;
    rakib.salary=rakib.salary *3 /2;
    const balance=manik.salary + rakib.salary;
    return balance;
}
const balance= totalMoney(manik,rakib);
console.log(balance);
console.log('After function:', manik.salary , rakib.salary);