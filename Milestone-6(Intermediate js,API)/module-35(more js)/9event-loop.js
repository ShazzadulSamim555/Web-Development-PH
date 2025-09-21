function one(){
    two();
    console.log(1);
}
function two(){
    three();
    console.log(2);
}
function three(){
    four();
    console.log(3);
}
function four(){
    five();
    console.log(4);
}
function five(){
    six();
    console.log(5);
}
function six(){
    console.log(6);
}

one();
