

import { gridLayout } from "./DOM";

import { playerClicks } from "./gameLogic";
import { changeShipPosition } from "./gameLogic";
import { handleComputerPlacement } from "./gameLogic";
import { handlePlayerAttackSequence } from "./gameLogic";
import { handleCheckForWinner } from "./gameLogic";
import { handleBattleshipStats } from "./gameLogic";
import { changeHoverPosition } from "./DOM";

import { placeShipsClass } from "./DOM";

import "./style.css";
//ORGINIZE CODE 
//TAKE AWAY CLICKING OF NODE GRID

import { hoverEffect } from "./DOM";
function battleshipGame() {
   gridLayout(); //DOM
 hoverEffect(); //DOM
 changeShipPosition();// GAME LOGIC
 changeHoverPosition(); // DOM
 placeShipsClass(); // DOM

 

  playerClicks();//GAME LOGIC

window.addEventListener("click", handleComputerPlacement);
window.addEventListener('click',handlePlayerAttackSequence)
window.addEventListener('click',handleBattleshipStats)
window.addEventListener('click',handleCheckForWinner)



}
battleshipGame()


