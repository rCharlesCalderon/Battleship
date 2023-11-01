import { player } from "./factoryObjects";
import { gameBoard } from "./factoryObjects";
export let displayContol = (() => {
  let playerPiece = player();
  let playerBoard = gameBoard();
  let computerPiece = player();
  let computerBoard = gameBoard();

  return { playerPiece, playerBoard, computerPiece, computerBoard };
})();

export function playerClicks() {
  let playerContainer = document.querySelector(".left-side");
  let playerPiece = displayContol.playerPiece;
  let playerBoard = displayContol.playerBoard;

  playerContainer.childNodes.forEach((node) => {
    node.addEventListener("click", function eventHandler(){
      if (playerPiece.counter !== 5 && checkPlacement(node, playerPiece, playerBoard)) {
        placeAPlayerShip(node);
        
        displayContol.playerPiece.counter++;
      }
    });
  });
}

export function changeShipPosition() {
  let computerContainer = document.querySelector(".left-side");
  computerContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    if (displayContol.playerPiece.checkShip() !== undefined) {
      displayContol.playerPiece.changePosition();
     
    }

  });
}

export function handleComputerPlacement () {
  if (displayContol.playerPiece.counter == 5) {
    placeComputerShips();
    window.removeEventListener("click", handleComputerPlacement);
    console.log(displayContol.computerBoard.coordinates,'computer')
  }
};

export function placeComputerShips() {
  let computerContainer = document.querySelector(".right-side").childNodes;
  let randomNumber = Math.floor(Math.random() * computerContainer.length);
  let computerNode = computerContainer[randomNumber];
  let computerPiece = displayContol.computerPiece;
  let computerBoard = displayContol.computerBoard;
  let x = parseInt(computerNode.getAttribute("coordinate")[0]);
  let y = parseInt(computerNode.getAttribute("coordinate")[1]);

  if (computerPiece.counter == 5) {
    return;
  }
  if (checkPlacement(computerNode, computerPiece, computerBoard)) {
    computerBoard.placeShip(x, y, computerPiece.theShip());
    computerPiece.counter++;
  }

  placeComputerShips();
}

export function checkPlacement(node, piece, board) {
  let x = parseInt(node.getAttribute("coordinate")[0]);
  let y = parseInt(node.getAttribute("coordinate")[1]);

  if (piece.checkShip().position == "horizontal") {
    for (let i = y; i < y + piece.checkShip().length; i++) {
      if (board.coordinates[x][i] !== "") {
        return false;
      }
    }
  }

  if (piece.checkShip().position == "vertical") {
    for (let i = x; i < x + piece.checkShip().length; i++) {
      //Cannot read properties of undefined
      if (board.coordinates[i] == null || board.coordinates[i][y] !== "") {
        return false;
      }
    }
  }

  return true;
}
export function handlePlayerAttackSequence() {
  if (displayContol.playerPiece.counter && displayContol.computerPiece.counter == 5) {
    playerAttackSequence();
   
    window.removeEventListener("click", handlePlayerAttackSequence);
  }
}


export function playerAttackSequence() {
  //whos turn it is and allow the clicks,
  let computerContainer = document.querySelector(".right-side");
  computerContainer.childNodes.forEach((node) => {
    node.addEventListener("click",function eventHandler () {
      let x = node.getAttribute("coordinate")[0];
      let y = node.getAttribute("coordinate")[1];
      if ( displayContol.computerBoard.coordinates[x][y] !== "" && !displayContol.computerBoard.coordinates[x][y].isSunk()) {
        displayContol.computerBoard.receiveAttack(x, y);
        computerAttackSequence();
        announceSunkShip(displayContol.computerBoard, x, y);
        
      } else {
         computerAttackSequence();
        displayContol.computerBoard.missed++
       
        
        
        
      }
       node.removeEventListener("click", eventHandler);
    });
   
  });
}

export function placeAPlayerShip(node) {
 
  let x = parseInt(node.getAttribute("coordinate")[0]);
  let y = parseInt(node.getAttribute("coordinate")[1]);
  displayContol.playerBoard.placeShip(x,y,displayContol.playerPiece.theShip());
}

export function announceSunkShip(board, x, y) {
  if (board.coordinates[x][y].isSunk() === true) {
    console.log(board.coordinates[x][y].shipNode,"node")
    console.log(board.coordinates[x][y], "is sunk");
  }

}

export function handleComputerAttackSequence() {
  if (displayContol.playerPiece.counter === 5 && displayContol.computerPiece.counter === 5) {
    console.log("reached 5")
    computerAttackSequence();
  }
}
//little buggy need, has a chance of attacking same node
export function computerAttackSequence() {
  let playerContainer = document.querySelector(".left-side").childNodes;
  let randomNumber = Math.floor(Math.random() * playerContainer.length);
  let node = playerContainer[randomNumber];
  let x = node.getAttribute("coordinate")[0];
  let y = node.getAttribute("coordinate")[1];
  if (displayContol.playerBoard.coordinates[x][y] !== "" && !displayContol.playerBoard.coordinates[x][y].isSunk() ) {
    displayContol.playerBoard.receiveAttack(x, y);
    //ADD MARKER
    announceSunkShip(displayContol.playerBoard, x, y);
     
  } else {
    displayContol.playerBoard.missed++;
  
  }
}

export function handleCheckForWinner() {
  if (displayContol.playerPiece.counter === 5 && displayContol.computerPiece.counter === 5) {
    checkForWinner();
  }
}
export function checkForWinner() {
  if (
    displayContol.computerPiece.ships.every((item) => item.isSunk() === true)
  ) {
  } else if (
    displayContol.playerPiece.ships.every((item) => item.isSunk() === true)
  ) {
  }
}

