
const friends=['asdr','hdkjnf','sdnudh','nduh','cmwirn'];
const length=friends.map(len=> len.length);
const first= friends.map(fst=>fst[0]);
console.log(length);
console.log(first); 


const nums=[8,9,10,21,15,11];
// const dbl= nums.map(num => (num*2));
// console.log(dbl);
const dbl= nums.map((num) => {
    console.log(num*2);
    return num*2;
});
console.log(dbl);