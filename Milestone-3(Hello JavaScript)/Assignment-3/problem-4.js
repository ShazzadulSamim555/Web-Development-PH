/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if(fileName.includes(".pdf") || fileName.includes(".docx") || fileName.includes("#")){
    console.log('Store');
}
else{
    console.log("Delete");
}