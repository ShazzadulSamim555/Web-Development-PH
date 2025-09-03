let data;
data=true;
data=false;
data=0;
data='';
data=' ';
data=[];
data={};

 console.log('Value of Data', data);

 if(data){
    console.log('value of data is truth',data);
 }
 else{ 
    console.log(data,' is false')
 }

//  Falsy Values (মোট ৮ টা ভ্যালু Falsy)

// JS-এ মাত্র কিছু নির্দিষ্ট ভ্যালুই falsy হয়। এগুলো হলো:

// false

// 0 (শূন্য)

// -0 (negative zero)

// 0n (BigInt zero)

// "" (খালি string)

// null

// undefined

// NaN