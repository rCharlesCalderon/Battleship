import "./style.css";
import { checkPlacement, displayContol } from "./gameLogic";




export function gridLayout() {
  let battleshipContainer = document.querySelector(".battleship-container")
  let playerContainer = document.querySelector(".left-side");
  let computerContainer = document.querySelector(".right-side");
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  //player grid, left one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`grid`);
      cells.setAttribute("coordinate", `${numbers[l]}${numbers[n]}`);
      playerContainer.appendChild(cells);
      battleshipContainer.appendChild(playerContainer)
    }
  }
  //computer grid, right one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`grid`);
      cells.setAttribute("coordinate",`${numbers[l]}${numbers[n]}`)
      computerContainer.appendChild(cells);
      battleshipContainer.appendChild(computerContainer);
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

export function domAttackMarker(attack,node){

    if(attack == "hit"){
      node.classList.add("hit-marker")
    }else if(attack == "missed"){
      node.classList.add("missed-marker")
    }

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

export function announceShip(ship){
      let container = document.querySelector(".announcement-container");
    container.innerHTML = `${ship.name} sunk!`;
    container.classList.add("announcement-container");
    setTimeout(() => {
      container.innerHTML = '';
       
    }, 2000);
  

}

export function announceWinner(winner){
  document.body.innerHTML = " "
  let announcement = document.createElement('span')
  announcement.classList.add("winner-blinker");
  announcement.textContent = `${winner}`;
  document.body.appendChild(announcement);
}
export function loadShipStats(){
  let statContainer = document.querySelector(".stat-container");
  statContainer.style.visibility = "visible";
  //PLAYER STATS
let playerDestoyerHits = document.querySelector('.des-hits1')
let playerDestoyerSunk = document.querySelector(".des-sunk1");
playerDestoyerHits.textContent = displayContol.playerPiece.ships[1].hits;
playerDestoyerSunk = displayContol.playerPiece.ships[1].sunk

let playerSubHits = document.querySelector(".sub-hits1");
let playerSubSunk = document.querySelector(".sub-sunk1");
playerSubHits.textContent =  displayContol.playerPiece.ships[2].hits;
playerSubSunk.textContent =  displayContol.playerPiece.ships[2].sunk;

let playerCruHits = document.querySelector(".cru-hits1");
let playerCruSunk = document.querySelector(".cru-sunk1");
 playerCruHits.textContent = displayContol.playerPiece.ships[0].hits;
 playerCruSunk.textContent = displayContol.playerPiece.ships[0].sunk;

 let playerBatHits = document.querySelector(".bat-hits1");
 let playerBatSunk = document.querySelector(".bat-sunk1");
  playerBatHits.textContent = displayContol.playerPiece.ships[3].hits;
  playerBatSunk.textContent = displayContol.playerPiece.ships[3].sunk;
  
  let playerCarHits = document.querySelector(".car-hits1");
   let playerCarSunk = document.querySelector(".car-sunk1");
  playerCarHits.textContent = displayContol.playerPiece.ships[4].hits;
   playerCarSunk.textContent = displayContol.playerPiece.ships[4].sunk;
//COMPUTER STATS 
let computerDestoyerHits = document.querySelector(".des-hits2");
let computerDestoyerSunk = document.querySelector(".des-sunk2");

computerDestoyerHits.textContent = displayContol.computerPiece.ships[1].hits;
computerDestoyerSunk.textContent = displayContol.computerPiece.ships[1].sunk;

let computerSubHits = document.querySelector(".sub-hits2");
let computerSubSunk = document.querySelector(".sub-sunk2");
computerSubHits.textContent = displayContol.computerPiece.ships[2].hits;
computerSubSunk.textContent = displayContol.computerPiece.ships[2].sunk;

let computerCruHits = document.querySelector(".cru-hits2");
let computerCruSunk = document.querySelector(".cru-sunk2");
computerCruHits.textContent = displayContol.computerPiece.ships[0].hits;
computerCruSunk.textContent = displayContol.computerPiece.ships[0].sunk;

let computerBatHits = document.querySelector(".bat-hits2");
let computerBatSunk = document.querySelector(".bat-sunk2");
computerBatHits.textContent = displayContol.computerPiece.ships[3].hits;
computerBatSunk.textContent = displayContol.computerPiece.ships[3].sunk;

let computerCarHits = document.querySelector(".car-hits2");
let computerCarSunk = document.querySelector(".car-sunk2");
computerCarHits.textContent = displayContol.computerPiece.ships[4].hits;
computerCarSunk.textContent = displayContol.computerPiece.ships[4].sunk;
}
