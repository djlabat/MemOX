import displayRes from "./displayRes.js";
import winCheck from "./winCheck.js";
import drawCheck from "./drawCheck.js";
import endGame from "./endGame.js";
import { p1, p2, btnPly, explain, players, wherePlyd, mainHTML, whoPly } from "./const.mjs";
export default function play (e) {
  let br = e.target[0].value // BROJ KOJI SE SUBMITUJE IY FORM-INPUTA
  guide.innerHTML = ""

  // DA FORM-a NE BI SLALA PODATKE NA SERVAR, JER NAM TO SAD NE TREBA.
  e.preventDefault() 

  // DOUBLE PLAY CHECK
  if (p1.moves.has(+br) || p2.moves.has(+br)) {
    btnPly.style.backgroundColor = players[1].color
    btnPly.innerHTML = `Pobedjuje ${players[1].name}!`
    explain.innerHTML = `😕 "${players[0].name[0]}" gazi "${p1.moves.has(+br) ? p1.name[0] : p2.name[0]}" na polju ${br}! <br> ❌ Zabranjeno gazenje.<br> 😟 ${players[0].name} gubi partiju.`
    players[0].moves.add(br+"!")
    endGame(br)
  }
  players[0].moves.add(+br)
  wherePlyd.innerHTML = `Poslednji potez je ${players[0].name} → ${br}`

  if (winCheck(players[0])) return endGame()
  if (drawCheck(players, btnPly)) return endGame()
  
  mainHTML.style.backgroundColor = players[1].color + '6'
  whoPly.style.color = players[1].color
  whoPly.innerHTML = `Na potezu je ${players[1].name}`
  
  displayRes() // <<<<<<<<<<<< FOR TESTING <<<<<<<<<<<<<
  players.reverse()
}