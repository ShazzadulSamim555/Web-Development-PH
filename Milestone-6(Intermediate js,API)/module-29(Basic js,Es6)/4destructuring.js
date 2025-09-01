// const product= {name: 'Redmi', price:25000, quantity:2};

// const discount= product.price*20/100;
// console.log(discount);
// const yourpay= product.price + discount;
// const vat= product.price*7/100;
// const total=yourpay+vat;

// const price=product.price;

// const discount= price*20/100;
// console.log(discount);
// const yourpay= price + discount;
// const vat= price*7/100;
// const total=yourpay+vat;

const {price, quantity}= {name: 'Redmi', price:25000, quantity:2};

const discount= price*20/100;
console.log(discount);
const yourpay= price + discount;
const vat= price*7/100;
const total=yourpay+vat;

console.log(price, quantity);

const dress=[500, 800, 1000,600];
const [trowser, shirt, pant, shirt2]= dress;
console.log(shirt, shirt2);
