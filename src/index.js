

import { addHoverEffect } from "./DOM";
import { removeHoverEffect } from "./DOM";
import { makeGrid } from "./DOM";
import { player } from "./factoryObjects";
import "./style.css";

let gameBoard = () => {
  let missed = 0;
  let placeShip = (coords) => {
    coords.forEach((element) => {element.classList.add("battleship-placed");});
  };
  let receiveAttack = () => {};
  let initualizeBoard = (playerPiece) => {
    //place 5 ships on the board
     hoverEffect(playerPiece)
     changePosition(playerPiece)
     placeAShip(playerPiece)
     
  };
  return { missed, placeShip, receiveAttack, initualizeBoard };
};
function changePosition(playerPiece){
let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
gridContainer.forEach((node)=>{
  node.addEventListener("contextmenu",(event)=>{
    event.preventDefault()
    
    if(playerPiece.theShip().position == "vertical"){
      removeHoverEffect(getVerticalNodes(node,playerPiece))
      addHoverEffect(getHorizontalNodes(node,playerPiece))
      playerPiece.changePosition()
    }else if(playerPiece.theShip().position == "horizontal"){
      removeHoverEffect(getHorizontalNodes(node,playerPiece))
      addHoverEffect(getVerticalNodes(node,playerPiece))
      playerPiece.changePosition();
    }
  })
})

}

function placeAShip(playerPiece) {
  let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
  
  gridContainer.forEach((node) => {
    node.addEventListener("click", () => {
      if (playerPiece.theShip().position == "horizontal") {

        gameBoard().placeShip(getHorizontalNodes(node,playerPiece));
        playerPiece.updateShip()
      } else if (playerPiece.theShip().position == "vertical") {

        gameBoard().placeShip(getVerticalNodes(node,playerPiece));
        playerPiece.updateShip();
      }
    });
  });
}



function hoverEffect(playerPiece) {
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );

  gridContainer.forEach((node) => {
    node.addEventListener("mouseover", () => {
      if (playerPiece.theShip().position == "horizontal") {
        addHoverEffect(getHorizontalNodes(node, playerPiece));
      } else if (playerPiece.theShip().position == "vertical") {
        addHoverEffect(getVerticalNodes(node, playerPiece));
      }
    });
    //problem in the double mouse leaves
    node.addEventListener("mouseleave", () => {
      removeHoverEffect(getVerticalNodes(node, playerPiece));
      removeHoverEffect(getHorizontalNodes(node, playerPiece));
    });

    //remove
  });
}


//verrtical is grabbing to much I think its grabbing 2 classes as expected from the slice()
function getVerticalNodes(node, playerPiece) {
  let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
  let vertical = gridContainer.filter((nodes) => nodes.className[1] === node.className[1]);
  let verticalNodes = vertical.slice(vertical.indexOf(node),vertical.indexOf(node) + playerPiece.theShip().length);
  console.log(verticalNodes)
  return verticalNodes;
}


function getHorizontalNodes(node, playerPiece) {
  let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
  let horizontal = gridContainer.filter((nodes) => nodes.className[0] === node.className[0]);
  let horizontalNodes = horizontal.slice(horizontal.indexOf(node),horizontal.indexOf(node) + playerPiece.theShip().length);
  
  return horizontalNodes;
}



let mainGame = (() => {
  makeGrid();
  
  let playerBoard = gameBoard();
  let playerPiece = player();
  //place 5 ships on the board
  playerBoard.initualizeBoard(playerPiece);

 
})();

//TODO 
// stop the clicks from happening if any of the nodes in the array have a class 
//stop the clicks from happening if the array of nodes doesnt match

