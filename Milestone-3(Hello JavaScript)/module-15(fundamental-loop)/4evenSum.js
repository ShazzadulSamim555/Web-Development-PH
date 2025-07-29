let number=1;
let sum=0;

while(number<=20){
    if(number%2 ===0){
        console.log(number);
        sum=sum+number;
    }
    number++;
}
console.log("Total even number is: ",sum);