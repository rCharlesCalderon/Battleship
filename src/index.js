import { gridLayout } from "./DOM";
import { gameBoard, player } from "./factoryObjects";
import "./style.css";
let displayContol = (() => {
  let playerPiece = player();
  let playerBoard = gameBoard();
  let computer = player();
  let computerBoard = gameBoard();
  return { playerPiece, playerBoard, computer, computerBoard };
})();

function battleshipGame(){
 
gridLayout()
playerClicks()
}

battleshipGame()


//loop thorugh the 

function playerClicks(){
  let playerContainer = document.querySelector(".left-side").childNodes
  playerContainer.forEach((node)=>{
    node.addEventListener('click',()=>{
      let coord1 = node.getAttribute("coordinate")[0];
      let coord2 = node.getAttribute("coordinate")[1];
      let playerPiece = displayContol.playerPiece;
      displayContol.playerBoard.placeShip(coord1,coord2, playerPiece.theShip());
      playerPiece.updateShip();
    
     
    })
  })
}

function getNodes(){
  if(displayContol.playerPiece.theShip().position === "vertical"){
    displayContol.playerBoard.coordinates
  }
}


//playerClicks
