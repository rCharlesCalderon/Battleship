//Mouse over event that will color in cells
import { gameBoard } from "./factoryObjects";
export function addHoverEffect(nodes) {
 nodes.forEach(element => {
  element.classList.add("battleship-hover-class");
 });
  
}
//Mouse leave event that will remove any color the mouse over event added
export function removeHoverEffect(nodes) {
nodes.forEach((element) => {
  
  element.classList.remove("battleship-hover-class");
});

}
//da grid
export function makeGrid() {
  let leftContainer = document.querySelector(".left-side");
  let rightContainer = document.querySelector(".right-side")
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //player grid, left one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      leftContainer.appendChild(cells);
    }
  }
  //computer grid, right one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      rightContainer.appendChild(cells);
    }
  }
}


export function hoverEffect(playerPiece) {
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );

  gridContainer.forEach((node) => {
    node.addEventListener("mouseover", () => {
      if (playerPiece.theShip() !== undefined) {
        if (playerPiece.theShip().position == "horizontal") {
          addHoverEffect(getHorizontalNodes(node, playerPiece));
        } else if (playerPiece.theShip().position == "vertical") {
          addHoverEffect(getVerticalNodes(node, playerPiece));
        }
      }
    });

    node.addEventListener("mouseleave", () => {
      if (playerPiece.theShip() !== undefined) {
        removeHoverEffect(getVerticalNodes(node, playerPiece));
        removeHoverEffect(getHorizontalNodes(node, playerPiece));
      }
    });
  });
}

export function changePosition(playerPiece) {
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );
  gridContainer.forEach((node) => {
    node.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      if (playerPiece.theShip().position == "vertical") {
        removeHoverEffect(getVerticalNodes(node, playerPiece));
        addHoverEffect(getHorizontalNodes(node, playerPiece));
        playerPiece.changePosition();
      } else if (playerPiece.theShip().position == "horizontal") {
        removeHoverEffect(getHorizontalNodes(node, playerPiece));
        addHoverEffect(getVerticalNodes(node, playerPiece));
        playerPiece.changePosition();
      }
    });
  });
}

export function placeAShip(playerPiece) {
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );
  gridContainer.forEach((node) => {
    node.addEventListener("click", () => {
      if (playerPiece.theShip() !== undefined) {
        if (playerPiece.theShip().position == "horizontal") {
          if (
            getHorizontalNodes(node, playerPiece).every(checkForClass) &&
            playerPiece.theShip().length ==
              getHorizontalNodes(node, playerPiece).length
          ) {
            gameBoard().placeShip(getHorizontalNodes(node, playerPiece));
            playerPiece.updateShip();
          }
        } else if (playerPiece.theShip().position == "vertical") {
          if (
            getVerticalNodes(node, playerPiece).every(checkForClass) &&
            playerPiece.theShip().length ==
              getVerticalNodes(node, playerPiece).length
          ) {
            gameBoard().placeShip(getVerticalNodes(node, playerPiece));
            playerPiece.updateShip();
          }
        }
      }
    });
  });
}

export function getHorizontalNodes(node, playerPiece, container = "left-side") {
  let gridContainer = Array.from(
    document.querySelector(`.${container}`).childNodes
  );
  if (playerPiece.theShip() !== undefined) {
    let horizontal = gridContainer.filter(
      (nodes) => nodes.className[0] === node.className[0]
    );
    let horizontalNodes = horizontal.slice(
      horizontal.indexOf(node),
      horizontal.indexOf(node) + playerPiece.theShip().length
    );

    return horizontalNodes;
  }
}

export function getVerticalNodes(node, playerPiece, container = "left-side") {
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

export function checkForClass(nodes) {
  if (nodes.classList.contains("battleship-placed")) {
    return false;
  } else {
    return true;
  }
}
