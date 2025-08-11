function totalPrice(Price){
    //console.log(Price);
    let sum=0;
    for(const phone of Price){
        //console.log(phone);
        sum += phone.price;
    }
    return sum;
}

const Mobiles =[
    {name: "Samsung", price: 20000},
    {name: "iPhone", price: 80000},
    {name: "Nokia", price: 15000},
    {name: "Xiaomi", price: 25000},
    {name: "Oneplus", price: 30000},
    {name: 'Realme', price: 23000},
]
const total= totalPrice(Mobiles);
console.log("Total price:", total);