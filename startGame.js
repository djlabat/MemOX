import {
  p1, p2, fp, btnPly, inpPly, guide, players, mainHTML, whoPly, changeFrstPly,
  wherePlyd, explain, curScr, res, availMoves, availMoves_del, availMoves_reset
} from "./const.js"
import coloring from "./coloring.js"

export default function startGame () {
    // * RESET
    p1.moves.clear()
    p2.moves.clear()
    btnPly.disabled = false
    btnPly.style.backgroundColor = "green"
    btnPly.innerHTML ="SLEDECI!"
    inpPly.disabled = false
    inpPly.value = 5
    guide.innerHTML = ''
    wherePlyd.innerHTML = ''
    explain.innerHTML = ''
    curScr.innerHTML = ''
    availMoves_reset()
    for (let r in res) {
      res[r].innerHTML = r- -1
      res[r].style.color = "#666"
    }

    // * CHANGE PLAYER
    changeFrstPly();
    ////console.log(players[0])
    coloring(players[0])
    whoPly.innerHTML = `Igru pocinje ${players[0].name}`
    
    // * ROBOT 1st PLAY
    if (players[0].robot == true) {
      let rnd = availMoves[Math.floor(Math.random() * availMoves.length)]
      availMoves_del(rnd)
      wherePlyd.innerHTML = `${players[0].name} je igrao na polje ${rnd}`
      inpPly.value = rnd
      btnPly.click()
    }
  }