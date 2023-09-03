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
  function checkAvailablity(row, column) {
    //row and column divs
    let rowCoordinate = row.getAttribute("row");
    let columnCoordinate = column.getAttribute("column");
    console.log(rowCoordinate, columnCoordinate);
    //if (idk if container has true allow click idk) {
    //  column.addEventListener("click", () => {

    // });
    //}
  }
  let ships = [ship(2), ship(3), ship(3), ship(4), ship(5)];

  return { placeShips, ships, checkAvailablity };
};

(function mainGame() {
  //event listener when user presses on a grid cell
  hoverEvent();
})();

function hoverEvent() {
  let leftContainer = document.querySelector(".left-side");
  let rows = leftContainer.querySelectorAll(".rows");
  rows.forEach((rowParent) => {
    let columns = rowParent.querySelectorAll(".columns");
    columns.forEach((column) => {
      column.addEventListener("mouseover", () => {
        //Idk check to see if the cell has an object idk
        gameBoard().checkAvailablity(rowParent, column);
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
