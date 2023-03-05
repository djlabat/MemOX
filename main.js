import {
  p1,  p2, form, btnRst, players, inpPly, btnPly
  } from "./const.js"
import startGame from "./startGame.js"
import shake from "./shake.js";
import play from "./play.js";
import {displayRes} from "./displayRes.js";

/* SCORE
Skor da se upisuje u localStorage
Responsive design BS5
resDisplay se prikazuje samo na GAME OVER.*/

// AI
// TODO: SCORE - localStorage
// TODO: popraviti - end game poruke, na potezu, poslednji igrao, Komp- Draw

// BUTTONS
form  .addEventListener("submit", play)
btnRst.addEventListener("click", startGame)



// START
// startGame(); Kwin()
// displayRes(); // <<<<<<<<<<<<<<<< TEST
// p1Win(); displayRes()
// p2Win(); displayRes()
// p1Draw(); displayRes()
// p2Draw(); displayRes()

// PLAY
// randomPlay(); displayRes() 
// fixedPlay(); displayRes()

// NAPRAVITI ZA TESTIRANJE POBEDA
// Kwin, Twin
// Kdraw, Tdraw
// Kgazi, Tgazi
function Kwin () {
  inpPly.value = 5; btnPly.click()
  inpPly.value = 1; btnPly.click()
}




