const loadData=async ()=>{
    console.log('One');
    console.log('Two');
    // console.log('Three');
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> console.log('Fatching Data', data))
    console.log('Four');
    console.log('Five');
}
loadData();
