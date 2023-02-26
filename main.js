import {
  p1,  p2,  form,  inpPly,  btnRst,  winCombs
  } from "./const.mjs"
import startGame from "./startGame.js"
import shake from "./shake.js";
import play from "./play.js";
import displayRes from "./displayRes.js";
// IDEJA: DRUGACIJE SAM MOGAO DA ORAGANIZUJEM PLEYERE:
// const players = [p1, p2] // da players[0] bude uvek current, a players[1] je drugi
// ako dreba da ih swichujem => players.reverse()
/*
Skor da se upisuje u localStorage
Responsive design BS5
resDisplay se prikazuje samo na GAME OVER.*/


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
  inpPly.value = Math.ceil(Math.random()*9)
}

function fixedPlay () {
  p1.moves.add(1)
  p2.moves.add(5)
  p1.moves.add(2)
  inpPly.value = String(AIcriticalPlay())
}

function AIcriticalPlay () {
  // NALAZENJE KRITICNOG POBEDNICKOG POTEZA (kojem fali jos jedan potez)
  // od p1, p2 treba da spreci. p1=Teo p2=Komp
  for (let comb of winCombs) { // RASPAKIVANJE NIZA winCombs...
    let tmp=0
    for (let cBr of comb) { // ...RASPAKIVANJE KOMBINACIJA...
      for (let mBr of [...p1.moves]) { // ... brojeva seta
        // find
        if (cBr == mBr) { // porede se svi winComb-brojevi sa potezima igraca
          tmp++
          if (tmp == 2) { // ↓ razlika 2 niza
            return (comb.filter(wcbr => ![...p1.moves].includes(wcbr)))
          }
        }
      }
    }
  }
}



// START
startGame()
displayRes()

// PLAY
// randomPlay()
fixedPlay()
displayRes()

AIcriticalPlay()

// AI
/*
startGame(){
  if (p1 == comp) {
    if (critacalPlay() {
      px.moves.add(criticalPlay())
    }
  } else {randomPlay()}
}
*/
// if >> kritican potez >> play taj potez
// else >> play random potez


