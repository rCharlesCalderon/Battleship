

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

(function battleshipGame(){
 
gridLayout()
playerClicks()
//EXECUTE PLACECOMPUTERSHIPS WHEN PLAYER HAS 5 ON THE BOARD
 window.addEventListener("click",()=>{
  if(displayContol.playerPiece.counter == 5){
    console.log("computer")
    placeComputerShips()
    window.removeEventListener("click",placeComputerShips);
  }
 })



})()



function attackSequence(){
  let container = document.querySelector('body')
  container.addEventListener('click',()=>{
    console.log("container")
  })
}
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
            console.log(displayContol.computerBoard.coordinates, "window");
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
  
  
}



//playerClicks
