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
        //look through the grid container array and grab the closest divs with the matching ending number
        let test = gridContainer.filter(
          (nodes) => nodes.className[1] === node.className[1]
        );
        console.log(test);
      });
    });
  };
  return { missed, placeShip, receiveAttack, initualizeBoard };
};

let player = () => {
  let ships = [ship(1), ship(2), ship(3), ship(4), ship(5)];
  let theShip = () => {};
  let attack = () => {};
  return { ships, attack, theShip };
};

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