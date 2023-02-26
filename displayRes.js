import { p1, p2, res } from "./const.mjs";
export default function displayRes () {
    for (let r=0; r<9; r++) {
      if (p1.moves.has(r+1)) {
          res[r].style.color = p1.color
          res[r].innerHTML = p1.name[0]
        } else if (p2.moves.has(r+1)) {
          res[r].style.color = p2.color
          res[r].innerHTML = p2.name[0]
        } else {
          res[r].innerHTML = r - -1
      } 
    }
  }