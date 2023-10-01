import { getVerticalNodes } from "./DOM";
import { getHorizontalNodes } from "./DOM";
import { changePosition } from "./DOM";
import { placeAShip } from "./DOM";
import { gameBoard } from "./factoryObjects";

import { hoverEffect } from "./DOM";

import { makeGrid } from "./DOM";
import { player } from "./factoryObjects";
import "./style.css";












//verrtical is grabbing to much I think its grabbing 2 classes as expected from the slice()






let mainGame = (() => {
  let playerBoard = gameBoard();
  let playerPiece = player();
  let computerPiece = player();
  let computerBoard = gameBoard();
  makeGrid();
  hoverEffect(playerPiece);
  changePosition(playerPiece);
  placeAShip(playerPiece);
 startEnemyBoard(playerPiece,playerBoard,computerPiece,computerBoard) 
  
})();
function startAttackSeq(playerPiece,playerBoard,computerPiece,computerBoard) {
  let rightContainer = document.querySelector(".right-side").childNodes
  rightContainer.forEach((node)=>{
    node.addEventListener("click",()=>{
      computerPiece.attack()
    })
  })
}

function startEnemyBoard(playerPiece,playerBoard,computerPiece,computerBoard){
  let leftContainer = document.querySelector('.left-side') 
  
  leftContainer.addEventListener("click",()=>{
    if(playerPiece.theShip() === undefined){
     placeComptuerShips(computerPiece,computerBoard)
     //hide battleship color on board, find a better way 
     //hideComputerShips()
     startAttackSeq(playerPiece,playerBoard,computerPiece,computerBoard)
    }
  })
}
function placeComptuerShips(computerPiece,computerBoard){
  
  for(let i = 0; i < computerPiece.ships.length; i++){
       let randomNode = getRandomNode(computerPiece);
       if(computerPiece.theShip() !== undefined){
       computerBoard.placeShip(randomNode);
       computerPiece.updateShip()
  
     }
}
}

function hideComputerShips(){
  let rightContainer = document.querySelector('.right-side').childNodes
  rightContainer.forEach((node)=>{
    node.style.backgroundColor = "grey";
  })
  
}


function getRandomNode(computerPiece){
   let rightContainer = document.querySelector(".right-side").childNodes;
  let randomIndex = Math.floor(Math.random() * rightContainer.length)
  let vertical = getVerticalNodes(rightContainer[randomIndex], computerPiece, "right-side");
  let horizontal = getHorizontalNodes(rightContainer[randomIndex],computerPiece,"right-side");
  if(computerPiece.theShip() !== undefined){
  if(computerPiece.theShip().position == "vertical"){
        if (vertical.length == computerPiece.theShip().length) {
          return vertical;
        } else {
          return getRandomNode(computerPiece);
        }
  }else if(computerPiece.theShip().position == "horizontal"){
    if (horizontal.length == computerPiece.theShip().length) {
      return horizontal;
    } else {
      return getRandomNode(computerPiece);
    }
  }
  
   
}

  
}

//TODO 
