import {
  p1,  p2, form, btnRst, players, inpPly, btnPly
  } from "./const.js"
import startGame from "./startGame.js"
import shake from "./shake.js";
import play from "./play.js";
import {displayRes} from "./displayRes.js";

// * SCORE
// * Napraviti interfejs za pravljenje novog igraca. 
// ^ Dodati i dugme SAVE SCORE za slanje profila igraca iz lStorage na server.
// * Napraviti f-ju koja pravi novog igraca i upisuje ga u localStorage.
// * Kljuc igraca u lStorage ce biti redni broj.
// * iz localStorage se upisuje u p1 i p2 kao trenutni igraci.
// * 

//Responsive design BS5 - Mobile first

// TODO: SCORE - localStorage
// TODO: popraviti - end game poruke, na potezu, poslednji igrao, Komp- Draw

// BUTTONS
form  .addEventListener("submit", play)
btnRst.addEventListener("click", startGame)

localStorage.setItem("Teodor", p1)
// localStorage.setItem("Lena", '{"name" : "Lena", "moves" : new Set([]), "color" : "#f88", "robot" : false}')
// localStorage.setItem("Komp", '{"name" : "Komp", "moves" : new Set([]), "color" : "#f88", "robot" : true}')

console.log(JSON.stringify(localStorage.getItem("Teodor")))

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




