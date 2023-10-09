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
    
    return ships[counter++]
    
  };
  let updateShip = ()=>{
     return counter++
  }
  let attack = () => {
 
  };
  let changePosition = ()=>{
   
  }
  let positions = []
  return { ships, attack, theShip,updateShip,changePosition,positions};
};


export let gameBoard = () => {
  let rows = 10 
  let columns = 10 
  let missed = 0;
   let getCoords = ()=> {}
  let placeShip = (x,y,ship) => {
 

  for(let i = 0; i < coordinates.length; i++){
    
  for(let j = x; j < ship.length; j++){
     coordinates[j][y] = ship;
  }
   
  }
  };
  let receiveAttack = () => {};
  let coordinates = [];



  for(let i = 0; i< rows; i++){
    coordinates[i] = []
    for(let j = 0; j < columns; j++){
      coordinates[i].push("")
     
    }
  }
   
   
  

  return { missed, placeShip, receiveAttack,getCoords,coordinates};
};


