import { p1, p2, res } from "./const.js";
let subNumP1 = 0, subNumP2 = 0
export default function displayRes () {
    for (let r=0; r<9; r++) {
      if (p1.moves.has(r+1)) {
          res[r].style.color = p1.color
          res[r].innerHTML = `${p1.name[0]}<sub>${++subNumP1}</sub>`
        } else if (p2.moves.has(r+1)) {
          res[r].style.color = p2.color
          res[r].innerHTML = `${p2.name[0]}<sub>${++subNumP2}</sub>`
        } else {
          res[r].innerHTML = r - -1
      } 
    }
  }
// PROBLEM JE STO NA KRAJU IGRE PONOVO RADI PISANJE subBrojeva, a u tom drugom crtanju vrednosti jos rastu.