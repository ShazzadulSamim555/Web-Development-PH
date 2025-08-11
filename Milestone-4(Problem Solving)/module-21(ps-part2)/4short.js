function shortest(heights){
    let min=heights[0];
    //console.log(heights);
    for(const height of heights){
        //console.log(height);
        if(height < min){
            min = height;
        }
    }
    return min;
}

const height= [150,165,162,172,145,159,148,180,155];
const short=shortest(height);
console.log("Shortest Person is:",short);