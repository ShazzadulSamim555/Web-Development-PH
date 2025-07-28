let price=400;
const teacher=false;

// if(teacher){
//     if(price>400){
//         price-=200;
//     }
//     else{
//         price;
//     }
// }
// else{
//     price+=200;
// }
// console.log(price);


//Using Ternary operator

price= teacher ? (price>400 ? price-200 : price) : price+200;
console.log(price);