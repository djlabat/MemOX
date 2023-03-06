export function reset() {
  localStorage.setItem( p1.name, 0)
  localStorage.setItem( p2.name, 0)
}

export function win (pX) {
  localStorage.setItem(pX.name, ++localStorage.getItem(px.name))
}