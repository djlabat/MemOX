import {p1, p2} from "./const.mjs"
import { winCombs, btnPly } from "./const.mjs";
export default function winCheck(pX) {
      if (winCombs.some(w => w.every(br => pX.moves.has(br)))) {
        btnPly.style.backgroundColor = pX.color  
        btnPly.innerHTML = `POBEDJUJE ${pX.name}`
        if (pX == p1) btnPly.style.backgroundColor = p1.color
        else btnPly.style.backgroundColor = p2.color
        return true
      }
    }