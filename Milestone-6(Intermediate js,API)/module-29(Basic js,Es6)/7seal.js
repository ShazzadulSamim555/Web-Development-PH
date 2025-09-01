const employee={
    name:'shazzadul islam samim',
    designation:'Web Developer',
    salary:20000,
    experience:1,
    age:22,
}

console.log(employee);
Object.seal(employee); //by using this we can just change or modify the value or keys but can't add or delete anything

delete employee.age;  //it's can delete
employee.location='Dhaka'; //it's adds new property with value
employee.salary= employee.salary+5000;// it's modify any properties value
console.log(employee);