function required(table,chair,bad){
    const tableWood= 6;
    const chairWood=3;
    const badWood=18;

    const chairTotalWood= chair * chairWood;
    const tableTotalWood= table * tableWood;
    const badTotalWood= bad * badWood;

    const TotalWoodNeed= chairTotalWood + tableTotalWood + badTotalWood;

    return TotalWoodNeed;

}

const Need= required(2,12,2);
console.log("Your Total wood need is:",Need);

