const products=[
    {name: 'redmi note 12 5G', brand:'xiaomi', price:16000, color: 'white'},
    {name: 'redmi note 13 5G', brand:'xiaomi', price:18000, color: 'Black'},
    {name: 'redmi note 14 pro', brand:'xiaomi', price:28000, color: 'Blue'},
    {name: 'redmi note 14 pro plus', brand:'xiaomi', price:31000, color: 'Silver'},
    {name: 'redmi note 15 pro', brand:'xiaomi', price:29000, color: 'black'},
    {name: 'iphone 17 air', brand:'apple', price:150000, color: 'dark-blue'},
];
const newData={
    name:'sony 4',
    brand:'sony',
    price:21000,
    color:'blue',
}


const newArray= [...products,newData];
//console.log(newArray);


const remainingProduct= newArray.filter(product => product.brand !== "xiaomi");
console.log(remainingProduct);


const numbers=[2,5,7,9,4,8,2,6];
//console.log(...numbers);