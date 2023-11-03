// ship factory function
export let ship = (name,length, position) => {
  let hits = 0;
  let sunk = false;

  function hit() {
    this.hits++;
    return this.hits;
  }

  function isSunk() {
    if (this.length === this.hits) {
     
      this.sunk = true;
      return true
    }
    return false;
  }
 
  return { name,length, position, hits, sunk, hit, isSunk};
};

//player function factory
export let player = () => {
  let ships = [
    ship("Cruiser", 3,"vertical"),
    ship("Destroyer",2,"horizontal"),
    ship("Submarine",3,"vertical"),
    ship("Battleship",4,"horizontal"),
    ship("Carrier",5,"vertical"),
  ];
  let counter = 0;
  let theShip = () => {
    
    return ships[counter++]
    
  };
 
  let attack = () => {
 
  };
  let changePosition = ()=>{
   if (ships[counter].position === "vertical") {
     ships[counter].position = "horizontal";
   }else if(ships[counter].position === "horizontal"){
    ships[counter].position = "vertical"
   }
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
  
  let receiveAttack = (x,y) => {
    
    coordinates[x][y].hit()
    console.log("hit")
  };
  


  for (let i = 0; i < rows; i++) {
    coordinates[i] = [];
    for (let j = 0; j < columns; j++) {
      coordinates[i].push("");
    }
  }
   

    
  

  return { missed, placeShip, receiveAttack,coordinates};
};

