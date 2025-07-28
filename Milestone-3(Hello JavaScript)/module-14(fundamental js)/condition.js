const price=10000;

if(price >= 7000){
    const discount= (price*15)/100;
    console.log("You get: ",discount," taka discount");
    const pay=price-discount;
    console.log("You should pay: ",pay);
}
else if(price >=5000){
    const discount=(price*10)/100;
    console.log("Your get ",discount," taka discount.");
    const pay=price-discount;
    console.log("You should pay: ",pay);

}
else{
    console.log("No offer avail. ");
    console.log("Pay: ",price);
}