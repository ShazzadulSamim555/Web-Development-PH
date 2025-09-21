const loadData= ()=>{
    console.log('one');
    console.log('two');
    try{
        const res= fetch('https://jsonplaceholder.typicode.com/users');
        const data= res.json();
        console.log(data);
    }
    catch{
        console.log('Somethings Went Wrong');
    }
    console.log('four');
    console.log('five');
}
loadData();



const loadData2=async ()=>{
    console.log('one');
    console.log('two');
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await res.json();
        console.log(data);
    }
    catch{
        console.log('Somethings Went Wrong');
    }
    console.log('four');
    console.log('five');
}
loadData2();