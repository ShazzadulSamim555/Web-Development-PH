const numbers=[5,4,3,6,8,1];
numbers.sort();  //this method sorts the array in place and return the sorted array,  it's just work for first character of the string.
console.log(numbers);

const age=[11,22,55,3,4,5,3];
age.sort((a,b) => a-b);  //this method sorts the array in ascending order based on numeric value
console.log('Sorted age: ', age);

let friends=['kamal', 'jamal', 'khamal','salam','palam'];
friends.sort();
console.log('Sorted friends: ', friends);