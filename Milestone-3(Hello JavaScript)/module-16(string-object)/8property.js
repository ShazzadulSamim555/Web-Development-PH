let people={
    name: 'Shazzadul islam samim',
    samim: {
        id:102,
        department:'cse',
        semester:'3rd',
        regular:true,
    },
    department: ['cse','ece','bba','textile'],
    library:true,
    'my location': ['Mirpur-14','Dhaka', 'Bangladesh'],
};

console.log(people);
console.log(people.department);
let id=people.samim.id;
console.log(id);

let samim= people['samim'];
console.log(samim);

let attend= people.samim['regular'];   //let attend= people['samim']['regular']
console.log(attend);

let location= people['my location'];
console.log(location);