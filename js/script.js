
let sketchColor = 'black';
let squareGrid = document.querySelector(".squareGrid");
let resetButton = document.querySelector(".reset");
let colorButton = document.querySelector(".colorChange");

resetButton.addEventListener("click", ()=>{
    square.style.color = "aqua";
})

colorButton.addEventListener("click", () =>{
    switch(getRandomInt(0,5)){
        case 0:
            sketchColor = "purple";
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

for(let i = 1; i <= 64; i++){
    let row = document.createElement('div');
    row.classList.add("row");
    for(let i = 1; i<= 64; i++){
        let square = document.createElement('div');
    square.classList.add("square");
    square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = sketchColor;
    })
    row.appendChild(square);
    }
    squareGrid.appendChild(row);   
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }