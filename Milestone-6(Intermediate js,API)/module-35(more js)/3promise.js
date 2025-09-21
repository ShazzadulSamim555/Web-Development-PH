const myPromise= new Promise((resolved,rejected)=>{
    let success= false;

    if(success){
        resolved("perfectly Worked");
    }
    else{
        rejected("Somethings went wrong");
    }
})
myPromise
.then((message)=>{
    console.log("Message: ",message);
})
.catch((error)=>{
    console.log("Error: ",error);
})