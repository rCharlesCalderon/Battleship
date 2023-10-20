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
 
  let attack = () => {
 
  };
  let changePosition = ()=>{
   
  }
  let checkShip = ()=>{
    return ships[counter]
  }
  return { ships, attack, theShip,changePosition,checkShip,counter};
};


export let gameBoard = () => {
  let rows = 10 
  let columns = 10 
  let missed = 0;
  
  let coordinates = [];
  
 
  let placeShip = (x, y, ship) => {
    //horizontal
    if(ship.position == "horizontal"){
       for (let i = y; i < y + ship.length; i++) {
         coordinates[x][i] = ship;
       }
    }else
    //vertically
    if(ship.position == "vertical"){
    
       for (let i = x; i < x + ship.length; i++) {
        
         coordinates[i][y] = ship;
       }
    }
   
  };
  
  let receiveAttack = () => {};
  


  for (let i = 0; i < rows; i++) {
    coordinates[i] = [];
    for (let j = 0; j < columns; j++) {
      coordinates[i].push("");
    }
  }
   

   
  

  return { missed, placeShip, receiveAttack,coordinates};
};

