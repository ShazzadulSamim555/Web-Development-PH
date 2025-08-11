function kilometer(miles){
    let km= miles*1.60934;
    km= km.toFixed(2);
    return km;
}
const KM= kilometer(4);
console.log("kilometer:",KM);