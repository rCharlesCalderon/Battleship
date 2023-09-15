// ship factory function
export let ship = (length, position) => {
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

//player function factory
export let player = () => {
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
