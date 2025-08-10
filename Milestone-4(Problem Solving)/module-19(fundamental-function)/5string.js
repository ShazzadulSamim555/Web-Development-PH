function string(str){
    const size=str.length;
    if(size % 2 === 0){
        console.log("Even length");
    }
    else{
        console.log("Odd length");
    }
}
string("Hello");
string("shazzadul");
string('Programming Hero');


function student(id, boolean){
    if(boolean === true){
        console.log("student id is:",id);
    }
    else{
        console.log("No student id found");
    }
}
student(102, true);
student(103, false);

//array------------------
function array(arr){
    const size=arr.length;
    return size;
    
}
const length = array([11,22,33,44,55]);
console.log(length);