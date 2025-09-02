class vehicle{
    constructor(brand,color,price){
        this.brand=brand;
        this.color=color;
        this.price=price;
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price;
    }
}

const car1= new vehicle('Toyota','white',1000000);
const car2=new vehicle('BMW',"black",2000000);
car1.getThis();

console.log(car1.getPrice());
console.log(car2.getPrice());


////////////normal object
const friends={
    marks:85,
    name:'shazzadul islam samim',
    id:102,
    department:'cse',
    getScore: function score(){
        console.log(this);
        return this.marks;
    },

    getScoreArr:()=>{
        console.log(this);
    }
}
friends.getScore();
console.log(friends.getScore());
console.log(friends.getScoreArr());