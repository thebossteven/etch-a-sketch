
let sketchColor = 'black';
let squareGrid = document.querySelector(".squareGrid");
let resetButton = document.querySelector(".reset");
let colorButton = document.querySelector(".colorChange");
let noOfSquares = 16;
let createButton = document.querySelector(".create");

createButton.addEventListener("click", () =>{

    noOfSquares = prompt("How many squares? (max: 120)", "16");
    if(noOfSquares <= 120){
    squareGrid.innerHTML = "";
    createGrid(noOfSquares);
    }else{
        alert("number not valid");
    }
})

resetButton.addEventListener("click", ()=>{
    squareGrid.innerHTML = "";
    createGrid(noOfSquares);
})


colorButton.addEventListener("click", () =>{
    switch(counter()){
        case 0:
            sketchColor = "black";
            break;
        case 1:   
        sketchColor = "blue";
            break;
        case 2:
            sketchColor = "red";
            break;
        case 3:
            sketchColor = "yellow";
            break;
        case 4:
            sketchColor = "grey";
            break;
        case 5:
            sketchColor = "green";
            break;

    }

})


function createGrid(noOfSquares){
for(let i = 1; i <= noOfSquares; i++){
    let row = document.createElement('div');
    row.classList.add("row");
    for(let i = 1; i<= noOfSquares; i++){
        let square = document.createElement('div');
    square.classList.add("square");
    square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = sketchColor;
    })
    row.appendChild(square);
    }
    squareGrid.appendChild(row);   
}
};
let count = 0;
function counter() {
   count++;
   if(count >=5){
    count = 0;
   }
   return count;
  }