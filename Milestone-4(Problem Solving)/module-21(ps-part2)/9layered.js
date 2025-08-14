function layeredTotal(quantity){

    if(quantity <=100){
        const first = quantity * 100;
        return "You have no discount, Total:",+first;
    }
    else if(quantity<=200){
        const first= 100*100;
        const second= (quantity - 100) * 90;
        const total= first + second;
        return "After 10% discount, Total:",total;
    }
    else{
        const first = 100 * 100;
        const second= 100 * 90;
        const third= (quantity - 200) * 80;
        const total = first + second + third;
        return "After 20% discount, Total:",total;
    }
}

const total = layeredTotal(110);
console.log(total);