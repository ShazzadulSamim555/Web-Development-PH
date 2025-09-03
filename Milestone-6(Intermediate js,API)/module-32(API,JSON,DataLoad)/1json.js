const person={
    name:'Shazzadul Islam Samim',
    age:22,
    profession:'student',
    studied:{
        class:"hon's",
        department:'CSE',
        id:102,
    },
    address:'Cumilla',
}
console.log(person, typeof person);


const personJSON= JSON.stringify(person);
console.log(personJSON, typeof personJSON);


const personParse= JSON.parse(personJSON);
console.log(personParse, "This object covert by parse prototype", typeof personParse);