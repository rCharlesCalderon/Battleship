import { gridLayout } from "./DOM";
import { gameBoard, player } from "./factoryObjects";
import "./style.css";
let displayContol = (() => {
  let playerr = player();
  let playerBoard = gameBoard();
  let computer = player();
  let computerBoard = gameBoard();
  return { playerr, playerBoard, computer, computerBoard };
})();

function battleshipGame(){
 
gridLayout()
testClick()
}

battleshipGame()


//loop thorugh the 

function testClick(){
  let playerContainer = document.querySelector(".left-side").childNodes
  playerContainer.forEach((node)=>{
    node.addEventListener('click',()=>{
     
    })
  })
}

