function add(num1, num2){
    console.log(typeof num1, typeof num2);
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide valid number";
    }
    return num1 + num2;
}
// const result= add(5,10);   //output: 15
const result=add('five','ten');
console.log("Result:",result);


function stringAddition(str1, str2){
    console.log(typeof str1, typeof str2);
    if(typeof str1 != "string" && typeof str2 !== 'string'){
        console.log("Please enter string type value");
    }
    return str1 + ' ' + str2;
}
//const string= stringAddition('five', 'one');  //output: string string
//const string= stringAddition('five', 1);  
const string= stringAddition('five', 'one');
console.log("Full: ",string);