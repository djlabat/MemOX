export const p1 = {name: "Teodor", moves: new Set([]), color: "#8ff", robot: false}
export const p2 = {name: "Komp", moves: new Set([]), color: "#f88", robot: true} // Comp
export let players = [p1, p2] // ^ players[0] is curent player - this is reversed at every play()
export const fp = [p1, p2] // ^ fp[0] is first player - this is revesed at every startGame()
export function changeFrstPly () { fp.reverse(); players = [...fp] }

export let availMoves = [1,2,3,4,5,6,7,8,9]
export function availMoves_del (br) {availMoves = availMoves.filter(avm => avm!==br)}
export function availMoves_reset () {availMoves = [1,2,3,4,5,6,7,8,9]}

export const winCombs = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
  
export const whoPly = document.querySelector("#who-ply")
export const wherePlyd = document.querySelector("#where-plyd")
export const form = document.querySelector('#form')
export const guide = document.querySelector('#guide')
export const inpPly = document.querySelector('#inp-play')
export const btnPly = document.querySelector('#btn-ply')
export const btnRst = document.querySelector('#btn-rst')
export const winner = document.querySelector("#winner")
export const explain = document.querySelector("#explain")
export const curScr = document.querySelector("#cur-scr")
export const gameOver = document.querySelector("#game-over")
export const res = [...document.querySelectorAll('.res')]
export const mainHTML = document.querySelector('main')



