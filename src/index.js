

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
    let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
    let playerShip = playerPiece;
    
    //function that gets current cord based on where cursor hovers
    hoverEffect(playerShip)
     placeAShip(playerShip)
    
     

   
    
  };
  return { missed, placeShip, receiveAttack, initualizeBoard };
};




function placeAShip(playerPiece){
   let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
    gridContainer.forEach((node)=>{
      node.addEventListener("click",()=>{
        if(playerPiece.theShip().position === "horizontal"){
           let horizontal = gridContainer.filter((nodes) => nodes.className[0] === node.className[0] );
           let horizontalNodes = horizontal.slice(horizontal.indexOf(node),horizontal.indexOf(node) + playerPiece.theShip().length);
           console.log(playerPiece)
           gameBoard().placeShip(horizontalNodes);
        }else if(playerPiece.theShip().position === "vertical"){
          let vertical = gridContainer.filter((nodes) => nodes.className.slice(1) === node.className.slice(1));
          let verticalNodes = vertical.slice(vertical.indexOf(node),playerPiece.theShip().length + vertical.indexOf(node));
          console.log(playerPiece);
          gameBoard().placeShip(verticalNodes)
        }
      })
    })
}

function hoverEffect(playerPiece){
  let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
  gridContainer.forEach((node) => {
    node.addEventListener("mouseover", () => {
   
       if(playerPiece.theShip().position === "horizontal"){
          let horizontal = gridContainer.filter((nodes) => nodes.className[0] === node.className[0]);
          let horizontalNodes = horizontal.slice(horizontal.indexOf(node),horizontal.indexOf(node) + playerPiece.theShip().length);
         addHoverEffect(horizontalNodes)
         node.addEventListener("mouseleave", () => {
          removeHoverEffect(horizontalNodes)
 });
         }else if(playerPiece.theShip().position === "vertical"){
              let vertical = gridContainer.filter((nodes) => nodes.className.slice(1) === node.className.slice(1));
              let verticalNodes = vertical.slice(vertical.indexOf(node),playerPiece.theShip().length + vertical.indexOf(node));
              node.addEventListener("mouseleave", () => {
                removeHoverEffect(verticalNodes);
              });
      }
    });
   
  });
}




function addShip(node, getCoordinates) {
  node.addEventListener("click", () => {
    gameBoard().placeShip(getCoordinates);
  });
}



let mainGame = (() => {
  makeGrid();
  
  let playerBoard = gameBoard();
  let playerPiece = player();
  //place 5 ships on the board
  playerBoard.initualizeBoard(playerPiece);

 
})();



