const strings="My name is Shazzadul Islam Samim";

let total=0;
let vowel=[];
for(const string of strings){
    let lower= string.toLowerCase();
    if(lower === 'a' || lower === 'e' || lower === 'i' || lower == 'o' || lower === 'u'){
        console.log(lower);
        vowel.push(lower);  
    }
   
}
// console.log(vowel);
for(let vwl of vowel){
    total+=1;
}
console.log(total);
