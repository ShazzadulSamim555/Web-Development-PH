let employees =[
    {name:'Kamal', age: 25, salary: 5000},
    {name:'Jamal', age: 30, salary: 6000},
    {name:'Salam', age: 28, salary: 5500},
    {name:'Tamal', age: 32, salary: 6500},
]

//console.log(employees);

// console.log(employees[1]);
// console.log(employees[1].name);

// employees[1].name ='Rofik';
// console.log(employees[1]);  //update name of the second index object

for(let employee of employees){
    //console.log(employee);

    console.log("Employee name:",employee.name,"&&", "Employee age:", employee.age);
}