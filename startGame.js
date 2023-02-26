import {p1, p2, btnPly, inpPly, guide, players, mainHTML, whoPly, wherePlyd, explain, curScr, res} from "./const.mjs"
export default function startGame () {
    p1.moves.clear()
    p2.moves.clear()
    btnPly.disabled = false
    btnPly.style.backgroundColor = "green"
    btnPly.innerHTML ="SLEDECI!"
    inpPly.disabled = false
    inpPly.value = 5
    guide.innerHTML = ''
    
    players.reverse()
    mainHTML.style.backgroundColor = players[0].color + '6'
    whoPly.style.color = players[0].color
    whoPly.innerHTML = `Igru pocinje ${players[0].name}`
    wherePlyd.innerHTML = ''
    explain.innerHTML = ''
    curScr.innerHTML = ''
    for (let r in res) {
      res[r].innerHTML = r- -1
      res[r].style.color = "#666"
    }
  }