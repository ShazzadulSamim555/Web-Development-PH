function leapYear(year){
    if((year%100 !== 0 && year%4 === 0) || (year%400 === 0)){
        //console.log("This is a leap year.");
        return "This is a leap Year.";
    }
    else{
        // console.log("Not a Leap Year.")
        return "Not a Leap Year.";
    }
}
const Year = leapYear(2021);
console.log(Year);