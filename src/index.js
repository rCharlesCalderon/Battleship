

import { gridLayout } from "./DOM";

import { playerClicks } from "./gameLogic";
import { changeShipPosition } from "./gameLogic";
import { handleComputerPlacement } from "./gameLogic";
import { handlePlayerAttackSequence } from "./gameLogic";
import { handleComputerAttackSequence } from "./gameLogic";
import { handleCheckForWinner } from "./gameLogic";

import "./style.css";
//ORGINIZE CODE 
//TAKE AWAY CLICKING OF NODE GRID


(function battleshipGame() {
  gridLayout();
  playerClicks();
  changeShipPosition()
window.addEventListener("click", handleComputerPlacement);
window.addEventListener('click',handlePlayerAttackSequence)
window.addEventListener('click',handleComputerAttackSequence)
window.addEventListener('click',handleCheckForWinner)

})();




