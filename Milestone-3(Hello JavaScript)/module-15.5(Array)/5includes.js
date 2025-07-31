let brand=['samsung', 'apple', 'redmi', 'oppo','realme'];
console.log(brand.includes('samsung'));
console.log(brand.includes('Apple'));  // case sensitive


//we also can use this in conditional statement

if(brand.includes('samsung')){
    console.log("Samsung is found");
}
else{
    console.log('This brand is nor found');
}