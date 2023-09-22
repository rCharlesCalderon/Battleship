//Mouse over event that will color in cells
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
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let l = 0; l < letters.length; l++) {
    for (let n = 0; n < numbers.length; n++) {
      let cells = document.createElement("div");
      cells.classList.add(`${letters[l]}${numbers[n]}`);
      leftContainer.appendChild(cells);
    }
  }
}

