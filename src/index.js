




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
  return { missed, placeShip, receiveAttack };
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
        if (getHorizontalNodes(node, playerPiece).every(checkForClass) && playerPiece.theShip().length == getHorizontalNodes(node,playerPiece).length) {
          gameBoard().placeShip(getHorizontalNodes(node, playerPiece));
          playerPiece.updateShip();
        }
        
      } else if (playerPiece.theShip().position == "vertical") {
        if (
          getVerticalNodes(node, playerPiece).every(checkForClass) && playerPiece.theShip().length == getVerticalNodes(node,playerPiece).length) {
          gameBoard().placeShip(getVerticalNodes(node, playerPiece));
          playerPiece.updateShip();
        }
      }


      
    });
  });
}

function checkForClass(nodes){
  if (nodes.classList.contains("battleship-placed")) {
    return false;
  } else {
    return true;
  }
}


function hoverEffect(playerPiece) {
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );
        
      gridContainer.forEach((node) => {
        node.addEventListener("mouseover", () => {
            if(playerPiece.theShip() !== undefined){
          if (playerPiece.theShip().position == "horizontal") {
            addHoverEffect(getHorizontalNodes(node, playerPiece));
          } else if (playerPiece.theShip().position == "vertical") {
            addHoverEffect(getVerticalNodes(node, playerPiece));
          }
        }
        });

        //problem in the double mouse leaves
        node.addEventListener("mouseleave", () => {
          if(playerPiece.theShip() !== undefined){
          removeHoverEffect(getVerticalNodes(node, playerPiece));
          removeHoverEffect(getHorizontalNodes(node, playerPiece))}
        });

        //remove
      })
}


//verrtical is grabbing to much I think its grabbing 2 classes as expected from the slice()
function getVerticalNodes(node, playerPiece,container = "left-side") {
  let gridContainer = Array.from(document.querySelector(`.${container}`).childNodes);
  if(playerPiece.theShip() !== undefined){
  let vertical = gridContainer.filter((nodes) => nodes.className[1] === node.className[1]);
  let verticalNodes = vertical.slice(vertical.indexOf(node),vertical.indexOf(node) + playerPiece.theShip().length);
  return verticalNodes;
  }
}

function getHorizontalNodes(node, playerPiece,container = "left-side") {
  let gridContainer = Array.from(document.querySelector(`.${container}`).childNodes);
  if(playerPiece.theShip() !== undefined){
  let horizontal = gridContainer.filter((nodes) => nodes.className[0] === node.className[0]);
  let horizontalNodes = horizontal.slice(horizontal.indexOf(node),horizontal.indexOf(node) + playerPiece.theShip().length);
  
  return horizontalNodes;
  }
}



let mainGame = (() => {
  let playerBoard = gameBoard();
  let playerPiece = player();
  makeGrid();
  hoverEffect(playerPiece);
  changePosition(playerPiece);
  placeAShip(playerPiece);
  startEnemyBoard(playerPiece) 
})();


function startEnemyBoard(playerPiece){
  let leftContainer = document.querySelector('.left-side') 
  let computerPiece = player()
  let computerBoard = gameBoard()
  leftContainer.addEventListener("click",()=>{
    if(playerPiece.theShip() === undefined){
      
     //loop 5 times 
     //randomNode check for validation 
     for(let i = 0; i < computerPiece.ships.length; i++){
       let randomNode = getRandomNode(computerPiece);
       computerBoard.placeShip(randomNode);
       computerPiece.updateShip()
     }
     
    }
  })
}



function getRandomNode(computerPiece){
   let rightContainer = document.querySelector(".right-side").childNodes;
  let randomIndex = Math.floor(Math.random() * rightContainer.length)
  let vertical = getVerticalNodes(rightContainer[randomIndex], computerPiece, "right-side");
  let horizontal = getHorizontalNodes(rightContainer[randomIndex],computerPiece,"right-side");
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
function placeComptuerShips(){
  let rightContainer = document.querySelector(".right-container")

}
//TODO 
//WHEN ALL THE SHIPS ARE PLACED, START THE ENEMY BOARD 
//ADD GRID TO THE RIGHT SIDE IN THE MAKEGRID FUNCTION FUCK IT 
//ADD RANDOM SHIPS ON THE BOARD 
