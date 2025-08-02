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

people['my location']= ['Barura', 'Cumilla'];
console.log(people['my location']);

let Name='Md. Shazzadul Islam Samim';
people['name']=Name;
console.log(people[Name]);