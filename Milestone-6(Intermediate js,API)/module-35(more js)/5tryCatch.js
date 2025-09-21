async function fetchData(){
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/users');
        const data= await res.json();
        console.log(data);
    }
    catch(error){
        console.error("Failed to Fetch Data:",error);
    }
}

fetchData();