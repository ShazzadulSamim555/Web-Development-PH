let NAME='SAMIM';
let Name='Samim';

if(NAME.toLowerCase() === Name.toLowerCase()){
    console.log('You are right');

}
else{
    console.log('You are wrong');
}


//if i want to remove any gap from left or right or both we use trim, but it's not remove gap from middle

let drink='  water';
let drunk='water  ';

if(drink.trim() === drunk.trim()){
    console.log("Drink it");
}
else{
    console.log( "It's not equal."
    )
}