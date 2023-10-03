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
    ship(4, "horizontal"),
    ship(5, "vertical"),
  ];
  let counter = 0;
  let theShip = () => {
    
    return ships[counter]
    
  };
  let updateShip = ()=>{
     return counter++
  }
  let attack = () => {
 
  };
  let changePosition = ()=>{
   
  }
  return { ships, attack, theShip,updateShip,changePosition};
};


export let gameBoard = () => {
  let missed = 0;
   let getCoords = ()=> {}
  let placeShip = (coord1,coord2,playerPiece) => {
    //arrays
    //let copyOfArrray = coordinates.slice()
    //let coordinate = copyOfArrray.splice(coord1,playerPiece.length);
    //
    coordinates[coord1].splice(coord2,1,playerPiece)
    console.log(coordinates)
  };
  let receiveAttack = () => {};
   let coordinates = [
     ["0", "", "", "", "", "", "", "", "", ""],
     ["1", "", "", "", "", "", "", "", "", ""],
     ["2", "", "", "", "", "", "", "", "", ""],
     ["3", "", "", "", "", "", "", "", "", ""],
     ["4", "", "", "", "", "", "", "", "", ""],
     ["5", "", "", "", "", "", "", "", "", ""],
     ["6", "", "", "", "", "", "", "", "", ""],
     ["7", "", "", "", "", "", "", "", "", ""],
     ["8", "", "", "", "", "", "", "", "", ""],
     ["9", "", "", "", "", "", "", "", "", ""],
   ];
  return { missed, placeShip, receiveAttack,getCoords,coordinates};
};