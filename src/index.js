import "./style.css";

makeGrid();
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
  //place ships
  function placeShips(coords, player) {}
  //recieve an attack
  //keep track of missed attacks
  //report which ships have been sunkl
  let ships = [ship(2), ship(3), ship(3), ship(4), ship(5)];

  return { placeShips, ships };
};

(function mainGame() {
  //event listener when user presses on a grid cell
  getCoords();
})();

function startGame(coords) {
  let board = gameBoard();
  let player = board;
  console.log(coords);
  board.placeShips(coords, player);
  console.log(player.ships[0]);
}

function getCoords() {
  let leftContainer = document.querySelector(".left-side");
  let leftContainerRows = leftContainer.querySelectorAll(".rows");
  leftContainerRows.forEach((row) => {
    let columns = row.querySelectorAll(".columns");
    columns.forEach((column) => {
      column.addEventListener("click", () => {
        let rowAttribute = row.getAttribute("row");
        let columnAttribute = column.getAttribute("column");
        let coords = [rowAttribute, columnAttribute];
        startGame(coords, column);
        return coords;
      });
    });
  });
}

function makeGrid() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let leftContainer = document.querySelector(".left-side");
  for (let row = 1; row <= 10; row++) {
    let rows = document.createElement("div");
    rows.setAttribute(`row`, `${row}`);
    rows.classList.add("rows");

    for (let column = 0; column < 10; column++) {
      let columns = document.createElement("div");
      columns.classList.add("columns");
      rows.appendChild(columns);
      columns.setAttribute("column", letters[column]);
      leftContainer.appendChild(rows);
    }
  }
}
