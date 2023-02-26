import {p1, p2, curScr, btnPly, inpPly} from "./const.mjs"
import displayRes from "./displayRes.js"
export default function endGame(br) {
    displayRes()
    curScr.innerHTML = `${p1.name} je igrao na poljima: ${[...p1.moves]} <br>
  ${p2.name} je igrao na poljima: ${[...p2.moves]}`
    btnPly.disabled=true
    inpPly.disabled = true
  }