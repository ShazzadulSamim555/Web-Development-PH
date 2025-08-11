function tallest(heights){
    let max=0;
    // console.log(heights);
    for(height of heights){
        //console.log(height);
        if(height > max){
            max=height;
        }
    }
    return max;
}

const allHeight=[150,165,162,172,159,148,180,155];
const tall = tallest(allHeight);
console.log("Tallest Person is:",tall);