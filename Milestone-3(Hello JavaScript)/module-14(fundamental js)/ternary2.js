let price= 500;
const teacher=false;

// if(teacher==true){
//     price= 0;
//     // console.log("Teacher will get free trouble.");
// }
// else{
//     price+=200;
//     // console.log("Student pay: ",price);
// }
// console.log(price); //same way

// use ternary operator----------------------------------

price= teacher==true ? 0 : price+200;
console.log(price);
