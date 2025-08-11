const Mobiles =[
    {name: "Samsung", price: 20000},
    {name: "iPhone", price: 80000},
    {name: "Nokia", price: 15000},
    {name: "Xiaomi", price: 25000},
    {name: "Oneplus", price: 30000},
    {name: 'Realme', price: 23000},
]
function cheapest(phones){
    let cheap= Mobiles[0];
    //console.log(phones);
    for(const phone of phones){
        //console.log(phone);
        if(phone.price < cheap.price){
            cheap = phone;
        }

    }
    return cheap;

}

const cheap= cheapest(Mobiles);
console.log("Cheapest Phone:",cheap);