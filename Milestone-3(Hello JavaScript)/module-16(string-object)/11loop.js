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


//for of used for array
//for in used for object
for(let prop in people){
    console.log(prop);
    console.log(people[prop]);
}

let keys=Object.keys(people);
console.log(keys);

for(let key of keys){
    console.log(key, people[key]);
}