import "./style.css";
import { checkPlacement, displayContol } from "./gameLogic";



export function gridLayout() {
  let playerContainer = document.querySelector(".left-side");
  let computerContainer = document.querySelector(".right-side");
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  //player grid, left one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      cells.setAttribute("coordinate", `${numbers[l]}${numbers[n]}`);
      playerContainer.appendChild(cells);
    }
  }
  //computer grid, right one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      cells.setAttribute("coordinate",`${numbers[l]}${numbers[n]}`)
      computerContainer.appendChild(cells);
    }
  }
}

export function hoverEffect(){
  let playerContainer = Array.from(document.querySelector(".left-side").childNodes)
  playerContainer.forEach((node)=>{
    node.addEventListener('mouseover',()=>{
      if(displayContol.playerPiece.checkShip() !== undefined){

      
      let horizontalRows = playerContainer.filter((nodes) => nodes.getAttribute("coordinate")[0] === node.getAttribute("coordinate")[0]);
      let horizontalNodes = horizontalRows.slice(horizontalRows.indexOf(node),horizontalRows.indexOf(node) + displayContol.playerPiece.checkShip().length);
      let verticalColums = playerContainer.filter((nodes) => nodes.getAttribute("coordinate")[1] === node.getAttribute("coordinate")[1]);
      let verticalNodes = verticalColums.slice(verticalColums.indexOf(node),verticalColums.indexOf(node)+ displayContol.playerPiece.checkShip().length)
      addHoverEffect(horizontalNodes,verticalNodes)
      node.addEventListener("mouseleave",()=>{removeHoverEffect(horizontalNodes, verticalNodes)})
      }
    })
  })
}

function addHoverEffect(horizontalNodes,verticalNodes){
 
if (displayContol.playerPiece.checkShip().position === "vertical") {
  verticalNodes.forEach((node) => node.classList.add("battleship-hover"));
}else if(displayContol.playerPiece.checkShip().position === "horizontal"){
  horizontalNodes.forEach((node) => node.classList.add("battleship-hover"));
}
}

function removeHoverEffect(horizontalNodes,verticalNodes) {
  horizontalNodes.forEach((node) => node.classList.remove("battleship-hover"));
  verticalNodes.forEach((node)=>{node.classList.remove("battleship-hover")})
}
 
export function changeHoverPosition(){
    let playerContainer = Array.from(document.querySelector(".left-side").childNodes)
    playerContainer.forEach((node)=>{
      node.addEventListener("contextmenu", (e) => {
        e.preventDefault()
      let horizontalRows = playerContainer.filter((nodes) => nodes.getAttribute("coordinate")[0] === node.getAttribute("coordinate")[0]);
      let horizontalNodes = horizontalRows.slice(horizontalRows.indexOf(node),horizontalRows.indexOf(node) + displayContol.playerPiece.checkShip().length);
      let verticalColums = playerContainer.filter((nodes) => nodes.getAttribute("coordinate")[1] === node.getAttribute("coordinate")[1]);
      let verticalNodes = verticalColums.slice(verticalColums.indexOf(node),verticalColums.indexOf(node)+ displayContol.playerPiece.checkShip().length)
      //needed some delay for the gameLogic to register before DOM
        setTimeout(() => {
          removeHoverEffect(horizontalNodes, verticalNodes);
          addHoverEffect(horizontalNodes, verticalNodes);
        
        }, 0);
        
       });
    })
}

export function placeShipsClass(){
  let playerContainer = Array.from(document.querySelector(".left-side").childNodes)
    playerContainer.forEach((node)=>{
      
      node.addEventListener("click", () => {
        if(displayContol.playerPiece.checkShip() !== undefined){
      let horizontalRows = playerContainer.filter((nodes) => nodes.getAttribute("coordinate")[0] === node.getAttribute("coordinate")[0]);
      let horizontalNodes = horizontalRows.slice(horizontalRows.indexOf(node),horizontalRows.indexOf(node) + displayContol.playerPiece.checkShip().length);
      let verticalColums = playerContainer.filter((nodes) => nodes.getAttribute("coordinate")[1] === node.getAttribute("coordinate")[1]);
      let verticalNodes = verticalColums.slice(verticalColums.indexOf(node),verticalColums.indexOf(node) + displayContol.playerPiece.checkShip().length)
     
        
      if(displayContol.playerPiece.checkShip().position === "vertical"  && checkValidPlacement(verticalNodes) ){
       
       verticalNodes.forEach((node)=>{
        node.classList.add("battleship-placed");
       })
      }else if(displayContol.playerPiece.checkShip().position === "horizontal" && checkValidPlacement(horizontalNodes)){
         
       horizontalNodes.forEach((node) => {
         node.classList.add("battleship-placed");
       });
      }
    }
       });
    })

    
}

export function domAttackMarker(){

    

}

function checkValidPlacement(array){
  if(array.length !== displayContol.playerPiece.checkShip().length){
    return false
  }
const isBelowThreshold = (nodes) => {
   if (nodes.classList.contains("battleship-placed") ) {
     return false;
   } else {
     return true;
   }
}


 return array.every(isBelowThreshold)
    
   
}