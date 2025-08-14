function totalFine( fare ) {
    if(typeof fare !== 'number' || fare <= 0){
        return "Invalid";
    }
    else{
        const fine= fare + ((20*fare)/100) + 30;
        return fine;
    }
}

const Fare= totalFine(200);
console.log(Fare);
