

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
     hoverEffect(playerShip)
     placeAShip(playerShip)
     
  };
  return { missed, placeShip, receiveAttack, initualizeBoard };
};


function placeAShip(playerPiece) {
  let gridContainer = Array.from(document.querySelector(".left-side").childNodes);
  
  gridContainer.forEach((node) => {
    node.addEventListener("click", () => {
      if (playerPiece.theShip().position === "horizontal") {
        let horizontal = gridContainer.filter((nodes) => nodes.className[0] === node.className[0]);
        let horizontalNodes = horizontal.slice( horizontal.indexOf(node),horizontal.indexOf(node) + playerPiece.theShip().length);
        gameBoard().placeShip(horizontalNodes);
        playerPiece.updateShip()
      } else if (playerPiece.theShip().position === "vertical") {
        let vertical = gridContainer.filter((nodes) => nodes.className.slice(1) === node.className.slice(1));
        let verticalNodes = vertical.slice(vertical.indexOf(node),playerPiece.theShip().length + vertical.indexOf(node) );
        gameBoard().placeShip(verticalNodes);
        playerPiece.updateShip();
      }
    });
  });
}



function hoverEffect(playerPiece){
    let gridContainer = Array.from( document.querySelector(".left-side").childNodes);
  
    gridContainer.forEach((node) => {
       let vertical = gridContainer.filter((nodes) => nodes.className.slice(1) === node.className.slice(1));
       let verticalNodes = vertical.slice(vertical.indexOf(node),vertical.indexOf(node) + playerPiece.theShip().length);
       let horizontal = gridContainer.filter((nodes) => nodes.className[0] === node.className[0]);
       let horizontalNodes = horizontal.slice(horizontal.indexOf(node),horizontal.indexOf(node) + playerPiece.theShip().length);
      node.addEventListener("mouseover", () => {
          if (playerPiece.theShip().position === "horizontal") {
              addHoverEffect(horizontalNodes);
              console.log(playerPiece.theShip())
      node.addEventListener("mouseleave", () => { removeHoverEffect(horizontalNodes);});
           } else if (playerPiece.theShip().position === "vertical") {
          addHoverEffect(verticalNodes)
          console.log(verticalNodes)
          node.addEventListener("mouseleave", () => { removeHoverEffect(verticalNodes);});
         
        }

      });
      //remove 
      node.addEventListener("contextmenu", (event) => {
         event.preventDefault();
       

               if(playerPiece.theShip().position === "horizontal"){
                 
                 addHoverEffect(verticalNodes);
                 removeHoverEffect(horizontalNodes)
                 
                  playerPiece.changePosition()
                  node.addEventListener('mouseleave',()=>{
                    removeHoverEffect(verticalNodes)
                  })
               }
         console.log(verticalNodes);

    

         
      });

    });
  
}




let mainGame = (() => {
  makeGrid();
  
  let playerBoard = gameBoard();
  let playerPiece = player();
  //place 5 ships on the board
  playerBoard.initualizeBoard(playerPiece);

 
})();



