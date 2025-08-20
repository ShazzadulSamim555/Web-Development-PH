console.log("Connected Successfully.");

function makeRed() {
  document.body.style.backgroundColor = "red";
}

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const getYellow = document.getElementById("Yellow");
getYellow.onclick = function () {
  document.body.style.backgroundColor = "yellow";
};

const makePurple = document.getElementById("Purple");
function purple() {
  document.body.style.backgroundColor = "purple";
}

makePurple.onclick = purple;

// function makeGreen() {
//   document.body.style.backgroundColor = "green";
// }

// const makeGreen= document.getElementById('Green');
// makeGreen.addEventListener('click', function (){
//     document.body.style.backgroundColor= 'green';
// });