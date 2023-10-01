export function gridLayout() {
  let playerContainer = document.querySelector(".left-side");
  let computerContainer = document.querySelector(".right-side");
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //player grid, left one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      playerContainer.appendChild(cells);
    }
  }
  //computer grid, right one
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      computerContainer.appendChild(cells);
    }
  }
}
