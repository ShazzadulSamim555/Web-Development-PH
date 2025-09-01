const people= {
    name:'shazzadul islam samim',
    age:22,
    department:{
        subject:'cse',
        id:102,
        stay:{
            location:'mirpur-13',
            mirpur:13,
            'sub-branch': false,
        },
    },
    "parmanent":{
        zilla:'Cumilla',
        'upa-zilla': 'barura',
        code:112233,
    }
}

console.log(people.department.stay['sub-branch']);
console.log(people['parmanent']["code"]);