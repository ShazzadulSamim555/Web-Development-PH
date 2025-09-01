const employee={
    name:'shazzadul islam samim',
    designation:'Web Developer',
    salary:20000,
    experience:1,
    age:22,
}

console.log(employee);
Object.freeze(employee); //freeze = it's stuck everything, that's why we can't change or adding or delete anything

delete employee.age;  //it's can delete
employee.location='Dhaka'; //it's adds new property with value
employee.salary= employee.salary+5000;// it's modify any properties value
console.log(employee);