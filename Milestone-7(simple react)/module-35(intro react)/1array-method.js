const products=[
    {name: 'redmi note 12 5G', brand:'xiaomi', price:16000, color: 'white'},
    {name: 'redmi note 13 5G', brand:'xiaomi', price:18000, color: 'Black'},
    {name: 'redmi note 14 pro', brand:'xiaomi', price:28000, color: 'Blue'},
    {name: 'redmi note 14 pro plus', brand:'xiaomi', price:31000, color: 'Silver'},
    {name: 'redmi note 15 pro', brand:'xiaomi', price:29000, color: 'black'},
    {name: 'iphone 17 air', brand:'apple', price:150000, color: 'dark-blue'},
];
//console.log(products);

// const result= products.map(product => product.price);
// console.log(result);

// const brand= products.filter(product => product.brand === "apple");
// console.log(brand);

const maximum= products.filter(product => product.price > 20000);
console.log(maximum);