const handleAddToStorage=()=>{
    const id=document.getElementById("id").value;
    const name=document.getElementById("name").value;

    // const data={id,name};
    const data={User_id: id , User_name: name};
    localStorage.setItem(id,JSON.stringify(data));
    console.log(data);
    
}

const storedItem= localStorage.getItem('222'); //key 222
console.log(storedItem);

const handleClear=()=>{
    localStorage.clear();
}