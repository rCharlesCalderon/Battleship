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
      let x = node.getAttribute('coordinate')[0]
      let y = node.getAttribute("coordinate")[1];
      displayContol.playerBoard.placeShip(x,y,displayContol.playerPiece.theShip())
      console.log(displayContol.playerBoard.coordinates)

    })
  })
}





function getVerticalNodes(node, playerPiece, container = "left-side") {
  let gridContainer = Array.from(
    document.querySelector(`.${container}`).childNodes
  );
  if (playerPiece.theShip() !== undefined) {
    let vertical = gridContainer.filter(
      (nodes) => nodes.className[1] === node.className[1]
    );
    let verticalNodes = vertical.slice(
      vertical.indexOf(node),
      vertical.indexOf(node) + playerPiece.theShip().length
    );
    return verticalNodes;
  }
}


//playerClicks
