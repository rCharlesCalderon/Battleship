

import { gridLayout } from "./DOM";
import { gameBoard, player } from "./factoryObjects";
import "./style.css";
let displayContol = (() => {
  let playerPiece = player();
  let playerBoard = gameBoard();
  let computerPiece = player();
  let computerBoard = gameBoard();
  
  return { playerPiece, playerBoard, computerPiece, computerBoard};
})();

(function battleshipGame() {
  gridLayout();
  playerClicks();
  changeShipPosition()
  //EXECUTE PLACECOMPUTERSHIPS WHEN PLAYER HAS 5 ON THE BOARD then remove it

window.addEventListener("click", handleComputerPlacement);
window.addEventListener('click',handlePlayerAttackSequence)
window.addEventListener('click',handleComputerAttackSequence)
window.addEventListener('click',handleCheckForWinner)
window.addEventListener('click',handleCheckForSunkShips)
//add the function of which ship sinks in the player clicks shit 
console.log("ada")
})();
function handleCheckForSunkShips(){

}
function changeShipPosition(){
  let computerContainer = document.querySelector('.left-side')
  computerContainer.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    displayContol.playerPiece.changePosition()
  })
}

function checkForWinner() {
 if(displayContol.computerPiece.ships.every(item => item.isSunk() === true)){

 }else if (displayContol.playerPiece.ships.every(item => item.isSunk() === true)) {
 
 }
}



function handleCheckForWinner(){
  if(displayContol.playerPiece.counter === 5  && displayContol.computerPiece.counter === 5){
    checkForWinner()
    
  }
}


function handleComputerAttackSequence(){
  if(displayContol.playerPiece.counter === 5 && displayContol.computerPiece.counter === 5){
    computerAttackSequence()
    
  }
}

function computerAttackSequence(){ 
let playerContainer = document.querySelector('.left-side').childNodes
let randomNumber = Math.floor(Math.random() * playerContainer.length);
let node = playerContainer[randomNumber]
     let x = node.getAttribute("coordinate")[0];
     let y = node.getAttribute("coordinate")[1];
     if (displayContol.playerBoard.coordinates[x][y] !== "" && !displayContol.playerBoard.coordinates[x][y].isSunk() ) {
        displayContol.playerBoard.receiveAttack(x, y);
     } else {
       displayContol.playerBoard.missed++;
     }
      
     
}

function PlayerattackSequence() {
  //whos turn it is and allow the clicks,
  let computerContainer = document.querySelector(".right-side")
  computerContainer.childNodes.forEach((node)=>{
    node.addEventListener("click",()=>{
      let x = node.getAttribute('coordinate')[0]
      let y = node.getAttribute('coordinate')[1]
    if (displayContol.computerBoard.coordinates[x][y] !== "" && !displayContol.computerBoard.coordinates[x][y].isSunk() ) {
        displayContol.computerBoard.receiveAttack(x, y);
      }else{
        displayContol.computerBoard.missed++
      }
      
    
    })
  })

}





function handlePlayerAttackSequence (){
if(displayContol.playerPiece.counter && displayContol.computerPiece.counter == 5){
  PlayerattackSequence()
  window.removeEventListener("click",handlePlayerAttackSequence)
}
}


function handleComputerPlacement () {
  if (displayContol.playerPiece.counter == 5) {
    placeComputerShips();
    window.removeEventListener("click", handleComputerPlacement);
  }
};



//loop thorugh the 

function playerClicks(){
  let playerContainer = document.querySelector(".left-side")
  let playerPiece = displayContol.playerPiece
  let playerBoard = displayContol.playerBoard
  
  playerContainer.childNodes.forEach((node)=>{
    node.addEventListener('click',()=>{
      if(playerPiece.counter !== 5 && checkPlacement(node,playerPiece,playerBoard) ){
      
       placeAPlayerShip(node);
      displayContol.playerPiece.counter++
     
      }
        
    })
    
  })
}




function placeComputerShips(){
  //Listen for counter to be 5+ in playerPeice before executing 

 
    let computerContainer = document.querySelector('.right-side').childNodes
    let randomNumber = Math.floor(Math.random() * computerContainer.length)
    let computerNode = computerContainer[randomNumber]
    let computerPiece = displayContol.computerPiece 
    let computerBoard = displayContol.computerBoard
    let x = parseInt(computerNode.getAttribute('coordinate')[0])
    let y = parseInt(computerNode.getAttribute("coordinate")[1]);
   
          if (computerPiece.counter == 5) {
            return;
          }
          if (checkPlacement(computerNode, computerPiece, computerBoard)) {
            computerBoard.placeShip(x, y, computerPiece.theShip());
            computerPiece.counter++;
          }

          placeComputerShips();
  
        
  
   

  
}




//check if there are objects in the array index
function checkPlacement(node,piece,board){
 
  let x = parseInt(node.getAttribute("coordinate")[0]);
  let y = parseInt(node.getAttribute("coordinate")[1]);

      if(piece.checkShip().position == "horizontal"){
        for (let i = y; i < y + piece.checkShip().length; i++) {
          if (board.coordinates[x][i] !== ""  ) {
            return false;
          }
        }
      }
              
  if (piece.checkShip().position == "vertical") {
    for (let i = x; i < x + piece.checkShip().length; i++) {
      //Cannot read properties of undefined
  if(board.coordinates[i] == null || board.coordinates[i][y] !== ''){
    return false
  }
    }
  }

        return true
          
          
  }

function placeAPlayerShip(node){
   let x = parseInt(node.getAttribute("coordinate")[0]);
   let y = parseInt(node.getAttribute("coordinate")[1]);
   displayContol.playerBoard.placeShip( x, y, displayContol.playerPiece.theShip());
  console.log(displayContol.playerBoard.coordinates)
  
}



//playerClicks
