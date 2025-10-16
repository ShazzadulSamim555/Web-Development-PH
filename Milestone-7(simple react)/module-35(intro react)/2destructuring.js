const friends=['samim','rakib','salim','nakib'];
const [fr1,fr2,fr3,fr4]=friends;

console.log(fr1, fr4);

//object
const person={
    name:'shazzadul islam samim',
    age:22,
    id:102,
    skill:['html','css','tcss','js'],
}
//console.log(person);
const {name, skill, id, age}=person;
console.log(name,id);

const keys= Object.keys(person);
console.log(keys);

const values=Object.values(person);
console.log(values);