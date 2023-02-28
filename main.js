import {
  p1,  p2,  form,  inpPly,  btnRst, players
  } from "./const.js"
import startGame from "./startGame.js"
import shake from "./shake.js";
import play from "./play.js";
import displayRes from "./displayRes.js";
import AiCriticalCheck from "./AiCriticalCheck.js";
/* SCORE
Skor da se upisuje u localStorage
Responsive design BS5
resDisplay se prikazuje samo na GAME OVER.*/

// AI
// TODO: play random potez
// NERESENO popraviti
// AI pobeda popraviti

// BUTTONS
form  .addEventListener("submit", play)
btnRst.addEventListener("click", startGame)

// FOR TESTING
function randomPlay () {
  let arr = [1,2,3,4,5,6,7,8,9]
  shake(arr)
  p1.moves.add(arr.pop())
  p2.moves.add(arr.pop())
  p1.moves.add(arr.pop())
  p2.moves.add(arr.pop())
  // inpPly.value = Math.ceil(Math.random()*9)
}

function fixedPlay () {
  p1.moves.add(1)
  p2.moves.add(5)
  p1.moves.add(2)
  p2.moves.add(3)
  p1.moves.add(7)
  p2.moves.add(4)
  p1.moves.add(9)
  console.log(AiCriticalCheck())
  inpPly.value = String(AiCriticalCheck())
}


// START
startGame(); displayRes()
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

// AIcriticalCheck()




