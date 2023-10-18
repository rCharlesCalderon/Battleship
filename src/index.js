

import { gridLayout } from "./DOM";
import { gameBoard, player } from "./factoryObjects";
import "./style.css";
let displayContol = (() => {
  let playerPiece = player();
  let playerBoard = gameBoard();
  let computerPeice = player();
  let computerBoard = gameBoard();
  
  return { playerPiece, playerBoard, computerPeice, computerBoard};
})();

(function battleshipGame(){
 
gridLayout()
playerClicks()
//Find a way to start placeComputerShips when the user places all the ships without making it look like shit and putting in
// in another function with a condtion 
//placeComputerShips()
})()




//loop thorugh the 

function playerClicks(){
  let playerContainer = document.querySelector(".left-side")
  let playerPeice = displayContol.playerPiece
  let playerBoard = displayContol.playerBoard
  
  playerContainer.childNodes.forEach((node)=>{
    node.addEventListener('click',()=>{
      if(checkPlacement(node,playerPeice,playerBoard)){
       placeAPlayerShip(node);
      }
        
    })
  })
}




function placeComputerShips(){
  //Listen for counter to be 5+ in playerPeice before executing 

  
    let computerContainer = document.querySelector('.right-side').childNodes
    let randomNumber = Math.floor(Math.random() * computerContainer.length)
    let computerNode = computerContainer[randomNumber]
    let computerPeice = displayContol.computerPeice 
    let computerBoard = displayContol.computerBoard
    let x = parseInt(computerNode.getAttribute('coordinate')[0])
    let y = parseInt(computerNode.getAttribute("coordinate")[1]);

    if(computerPeice.checkShip().length === 5){
      return
    }
    if(checkPlacement(computerNode,computerPeice,computerBoard)){
      computerBoard.placeShip(x, y, computerPeice.theShip());
    }
     console.log(computerBoard.coordinates);
    
    placeComputerShips()
  
   
  
  
}




//check if there are objects in the array index
function checkPlacement(node,piece,board){
  
  let x = parseInt(node.getAttribute("coordinate")[0]);
  let y = parseInt(node.getAttribute("coordinate")[1]);

      if(piece.checkShip().position == "horizontal"){
        for (let i = y; i < y + piece.checkShip().length; i++) {
          if (board.coordinates[x][i] !== "" ) {
            return false;
          }
        }
      }
              
  if (piece.checkShip().position == "vertical") {
    for (let i = x; i < x + piece.checkShip().length; i++) {
      //Cannot read properties of undefined
      if (board.coordinates[i][y] !== "") {
        return false;
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
