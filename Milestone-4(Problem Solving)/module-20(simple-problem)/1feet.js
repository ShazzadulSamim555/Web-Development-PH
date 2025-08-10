function inchToFeet(inch){
    let feet= inch/12;
    return feet;
}
const Feet= inchToFeet(69);
console.log(Feet);


//we want to convert this actual feet value into inch

function InchToFeet(Inch){
    let feet= parseInt(Inch/12);
    let inch= (Inch % 12);
    return feet + " feet " + inch + " inch";
}
const Inch= InchToFeet(69);
console.log(Inch);
