// const habib=100;
// const rakib=150;

// if(habib > rakib){
//     console.log("Habib is greater than Rakib");
// }
// else{
//     console.log("Rakib is greater than Habib.")
// }

//--------------------------------------------------------------------------

function getMax(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2
    }
}
const max= getMax(99,100);
console.log("Biggest number is: ", max);

const max1=getMax(15,203);
const max2=getMax(150,180);
const ultimate=getMax(max1,max2);
console.log("Biggest Number is:", ultimate);