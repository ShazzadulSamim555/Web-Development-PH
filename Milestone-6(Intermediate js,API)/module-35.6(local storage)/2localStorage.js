const setItem=()=>{
    const number= Math.ceil(Math.random()*100);
    console.log(number);
    localStorage.setItem('number', number);
}

const getNumberLS=()=>{
    const number= localStorage.getItem('number');
    console.log('get item from ls: ', number);
}