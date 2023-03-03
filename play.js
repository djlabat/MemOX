import displayRes from "./displayRes.js";
import winCheck from "./winCheck.js";
import drawCheck from "./drawCheck.js";
import endGame from "./endGame.js";
import { p1, p2, btnPly, explain, players, wherePlyd, mainHTML, whoPly, 
  inpPly, availMoves_del, availMoves,  } from "./const.js";
import { AiCriticalWiningCheck, AiCriticalLosingCheck } from "./aiCheck.js";
import coloring from "./coloring.js";
export default play

function play (e) {
  let br = Number(e.target[0].value) // BROJ KOJI SE SUBMITUJE IY FORM-INPUTA
  guide.innerHTML = ""

  // DA FORM-a NE BI SLALA PODATKE NA SERVAR, JER NAM TO SAD NE TREBA.
  e.preventDefault() 

  // DOUBLE PLAY CHECK
  if (p1.moves.has(br) || p2.moves.has(br)) {
    btnPly.style.backgroundColor = players[1].color
    btnPly.innerHTML = `Pobedjuje ${players[1].name}!`
    explain.innerHTML = `😕 "${players[0].name[0]}" gazi "${p1.moves.has(+br) ? p1.name[0] : p2.name[0]}" na polju ${br}! <br> ❌ Zabranjeno gazenje.<br> 😟 ${players[0].name} gubi partiju.`
    players[0].moves.add(" !"+br+"!")
    return endGame(br)
  } 
  // NORMAL PLAY
  players[0].moves.add(br)
  availMoves_del(br)
  // console.log(availMoves)
  wherePlyd.innerHTML = `Poslednji potez je ${players[0].name} → ${br}`
  if (winCheck(players[0])) return endGame()
  if (drawCheck()) return endGame()
  
  // NEXT PLAYER PREPARE
  coloring(players[1])
  
  inpPly.focus()

  displayRes() // <<<<<<<<<<<< FOR TESTING <<<<<<<<<<<<<
  players.reverse() // na kraju Teo poteza se odigra i ROBOT potez
  
  // ROBOT PLAY
  if (players[0].robot == true) {
    if (AiCriticalWiningCheck()) {
      players[0].moves.add(+AiCriticalWiningCheck())
      availMoves_del(br)
      if (winCheck(players[0])) return endGame()
      if (drawCheck()) return endGame()
      coloring(players[1])
      players.reverse()
      setTimeout(displayRes, 1000)

    } else if (AiCriticalLosingCheck()) { // Critical move
      players[0].moves.add(+AiCriticalLosingCheck())
      availMoves_del(br)
      if (winCheck(players[0])) return endGame()
      if (drawCheck()) return endGame()
      coloring(players[1])
      players.reverse()
      setTimeout(displayRes, 1000)

    } else { // Random move
      let rnd = availMoves[Math.floor(Math.random() * availMoves.length)]
      players[0].moves.add(rnd)
      availMoves_del(rnd)
      if (winCheck(players[0])) return endGame()
      if (drawCheck()) return endGame()
      coloring(players[1])
      players.reverse()
      setTimeout(displayRes, 1000)
    }
  }
}