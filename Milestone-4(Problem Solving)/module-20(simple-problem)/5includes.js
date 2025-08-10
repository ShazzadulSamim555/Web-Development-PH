function singleStudent(students){
    let unique=[];

    for(const student of students){
        //console.log(student);
        if( unique.includes(student) === false){
            unique.push(student);
        }
    }
    return unique;
}

const Students=["samim", 'rahim', 'karim', 'sarim', 'lahim', 'sohan','samim', 'sarim', 'samim', 'labib', 'karim'];
console.log("Only particular student can be attended list:",singleStudent(Students));