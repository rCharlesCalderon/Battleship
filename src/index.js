import "./style.css";

let ship = (length) => {
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

  return { length, hits, sunk, hit, isSunk };
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
      node.addEventListener("mouseover", () => {
        let playerShip = playerPiece.theShip();

        highlight(node, playerShip);
      });
    });
  };
  return { missed, placeShip, receiveAttack, initualizeBoard };
};

let player = () => {
  let ships = [ship(3), ship(2), ship(3), ship(4), ship(5)];
  let counter = 0;
  let theShip = () => {
    return ships[counter];
  };
  let attack = () => {};
  return { ships, attack, theShip };
};

function highlight(node, playerShip) {
  //node is the element/cell you are hovering ex: div A4,C3,D9 any of those
  //playerShip is my player object
  let gridContainer = Array.from(
    document.querySelector(".left-side").childNodes
  );
  let shipLength = gridContainer.filter(
    (nodes) => nodes.className.slice(1) === node.className.slice(1)
  );
  let highlightOver = shipLength.slice(
    shipLength.indexOf(node),
    playerShip.length
  );
  console.log(shipLength);
  console.log(highlightOver);
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