import { p1, p2, res } from "./const.js";
export function displayRes () {

  // * Potezi [ igraca ]
  let p1mArr = [...p1.moves.values()], p2mArr = [...p2.moves.values()]
  
  // * Upis rezultata od p1
  for (let i in p1mArr) {
    res[p1mArr[i]-1].style.color = p1.color
    res[p1mArr[i]-1].innerHTML = `${p1.name[0]}<sub>${i- -1}</sub>`
  }
  
  // * Upis rezultata od p2
  for (let i in p2mArr) {
    res[p2mArr[i]-1].style.color = p2.color
    res[p2mArr[i]-1].innerHTML = `${p2.name[0]}<sub>${i- -1}</sub>`
  }
}