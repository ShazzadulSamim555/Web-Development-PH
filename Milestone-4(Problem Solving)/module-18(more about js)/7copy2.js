let products=[11,22,33,44,55];
let comProducts= products;
products.push(66);
comProducts.push(77); //both array are updated because they are referencing the same array;

console.log(products);
console.log(comProducts);