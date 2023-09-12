import "./style.css";

let ship = (length, position) => {
  let hits = 0;
  let sunk = false;

  function hit() {
    this.hits++;
    return this.hits;
  }

  function isSunk() {
    if (this.length === this.count) {
      this.sunk = true;
    }
    return false;
  }

  return { length, position, hits, sunk, hit, isSunk };
};

let gameBoard = () => {
  let missed = 0;
  let placeShip = (coords) => {};
  let receiveAttack = () => {};
  let initualizeBoard = (playerPiece) => {
    let gridContainer = Array.from(
      document.querySelector(".left-side").childNodes
    );
    gridContainer.forEach((node) => {
      node.addEventListener("mouseover", (event) => {
        let playerShip = playerPiece.theShip();

        let hoverEvent = highlight(node, playerShip);

        //while the mouse is over a node, color what is returned in the array from hoverEvent
        console.log(hoverEvent);
      });
    });
  };
  return { missed, placeShip, receiveAttack, initualizeBoard };
};

let player = () => {
  let ships = [
    ship(3, "horizontal"),
    ship(2, "vertical"),
    ship(3, "vertical"),
    ship(4, "vertical"),
    ship(5, "vertical"),
  ];
  let counter = 0;
  let theShip = () => {
    return ships[counter];
  };
  let attack = () => {};
  return { ships, attack, theShip };
};

function highlight(node, playerShip) {
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  //node is the element/cell you are hovering ex: div A4,C3,D9 any of those
  //playerShip is my player object
  //let rowIndex = letters.indexOf(node.className[0]);
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );
  let vertical = gridContainer.filter(
    (nodes) => nodes.className.slice(1) === node.className.slice(1)
  );
  let horizontal = gridContainer.filter(
    (nodes) => nodes.className[0] === node.className[0]
  );
  if (playerShip.position === "vertical") {
    let verticalNodes = vertical.slice(
      vertical.indexOf(node),
      playerShip.length + vertical.indexOf(node)
    );
    return verticalNodes;
  } else if (playerShip.position === "horizontal") {
    let horizontalNodes = horizontal.slice(
      horizontal.indexOf(node),
      playerShip.length + horizontal.indexOf(node)
    );
    return horizontalNodes;
  }
}

function makeGrid() {
  let leftContainer = document.querySelector(".left-side");
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      leftContainer.appendChild(cells);
    }
  }
}

let mainGame = (() => {
  makeGrid();
  let playerBoard = gameBoard();
  let playerPiece = player();
  playerBoard.initualizeBoard(playerPiece);
})();