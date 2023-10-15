
import { gridLayout } from "./DOM";
import { gameBoard, player } from "./factoryObjects";
import "./style.css";
let displayContol = (() => {
  let playerPiece = player();
  let playerBoard = gameBoard();
  let computer = player();
  let computerBoard = gameBoard();
  
  return { playerPiece, playerBoard, computer, computerBoard};
})();

(function battleshipGame(){
 
gridLayout()
playerClicks()
//When counter is 5+ execute placeComputerShips
placeComputerShips()
})()




//loop thorugh the 

function playerClicks(){
  let playerContainer = document.querySelector(".left-side").childNodes
  playerContainer.forEach((node)=>{
    node.addEventListener('click',()=>{
      if(checkPlacement(node)){
       placeAPlayerShip(node);
        }

    })
  })
}

function placeComputerShips(){
  //Listen for counter to be 5+ in playerPeice before executing 
}







//check if there are objects in the array index
function checkPlacement(node){
  let x = parseInt(node.getAttribute("coordinate")[0]);
  let y = parseInt(node.getAttribute("coordinate")[1]);

      if(displayContol.playerPiece.checkShip().position == "horizontal"){
        for (let i = y; i < y + displayContol.playerPiece.checkShip().length; i++) {
          if (displayContol.playerBoard.coordinates[x][i] !== "" ) {
            return false;
          }
        }
      }
              
  if (displayContol.playerPiece.checkShip().position == "vertical") {
    for (let i = x; i < x + displayContol.playerPiece.checkShip().length; i++) {
      if (displayContol.playerBoard.coordinates[i][y] !== "" ) {
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
