// const render = require("./server.js")
// latest ver
/*
Pre svakog poteza dobije se random broj.
Na taj broj dodajes broj koji upises = broj polja koje ces da igras. 
NPR.:
RND = 6, unosim -2 => igrao sam na polje 4
RND = -3, unosim 8 => 5
9, -8 => 1

Skor da se upisuje u localStorage

Responsive design

resDisplay se prikazuje samo na GAME OVER.
*/
// Memox
const p1 = {name: "X", moves: new Set([])}
const p2 = {name: "O", moves: new Set([])}
let curPlyr = p1;

const whoPly = document.querySelector("#who-ply")
const wherePlyd = document.querySelector("#where-plyd")
const form = document.querySelector('#form')
const inpPly = document.querySelector('#inp-play')
const btnPly = document.querySelector('#btn-ply')
const btnRst = document.querySelector('#btn-rst')
const winner = document.querySelector("#winner")
const endMsg = document.querySelector('#end-msg')
const gameOver = document.querySelector("#game-over")
const res = [...document.querySelectorAll('.res')]

// BUTTONS
form  .addEventListener("submit", play)
btnRst.addEventListener("click", startGame)

function startGame (e) {
  // e.preventDefault()
  p1.moves.clear()
  p2.moves.clear()
  btnPly.disabled=false
  curPlyr = p1
  whoPly.innerHTML = ''
  wherePlyd.innerHTML = ''
  winner.innerHTML = ''
  endMsg.innerHTML = ''
  gameOver.innerHTML = ''
  for (let r of res) r.innerHTML = '-'
  displayRes()
  console.log("%cNOVA PARTIJA JE ZAPOCETA!", "color:#0ff")
  
}

function play (e) {
  // !!!!!!!!!ZAMENITI srcElement!!!!!!!!!!
  let br = e.srcElement[0].value // BROJ IZ HTML INPUTA
  // let br = e.target// BROJ IZ HTML INPUTA
  // console.log(res, br)
  // DA FORM-a NE BI SLALA PODATKE NA SERVAR, JER NAM TO SAD NE TREBA.
  e.preventDefault() 

  // PROVERA DA LI JE DUPLIRAN POTEZ
  if (p1.moves.has(+br) || p2.moves.has(+br)) {
    if (!confirm(`To polje je vec odigrano! Izvini ${curPlyr.name}... Ali to ne sme da se radi. Diskvalifikovan si! Prihvatas li poraz?`)) return
    else {    
      winner.innerHTML = `Winner is ${switchPlayer().name}!<br>Igrac ${switchPlayer().name} je pokusao da igra na mesto ${br},<br>ali na to mesto je vec jednom igrao ${p1.moves.has(+br) ? p1.name : p2.name}.<br>Zbog toga je ${curPlyr.name} izgubio partiju.`
      alert(`Bravo ${curPlyr.name}! Pola poraza ti je oprosteno samim tim sto si prihvatio poraz.`)

      return endGame()
    }
  }
  curPlyr.moves.add(+br)
  wherePlyd.innerHTML = `${curPlyr.name} je igrao na polje ${br}`

  if (winCheck(curPlyr)) return endGame()
  if (drawCheck()) return endGame()
  switchPlayer()
  displayRes()
  whoPlay()
}

function winCheck(pX) {
  winCombs = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]

  if (winCombs.some(w => w.every(br => pX.moves.has(br)))) {
    winner.innerHTML = `Winner is ${pX.name}`
    if (pX == p1) winner.style.color = "#88f"
    else winner.style.color = "#f88"
    return true
  }
}

function drawCheck () {
  if (curPlyr.moves.size == 5) {
    winner.innerHTML = "Neresena partija!"
    return true
  }
}

function switchPlayer() {
  return curPlyr = curPlyr==p1 ? p2 : p1
}

function whoPlay () {
  if (curPlyr == p1) {
    whoPly.textContent = `Na potezu je: ${curPlyr.name}`
    whoPly.style.color = "#88f"
  }
  else {
    whoPly.textContent = `Na potezu je: ${curPlyr.name}`
    whoPly.style.color = "#f88"
  }
}


function endGame() {
  displayRes()
  endMsg.innerHTML += `${p1.name} je igrao na poljima: ${[...p1.moves]} <br>
${p2.name} je igrao na poljima: ${[...p2.moves]}`
  gameOver.innerHTML += "=====>>> GAME OVER <<<====="
  btnPly.disabled=true
}

function displayRes () {
  for (let r=0; r<9; r++) {
    if (p1.moves.has(r+1)) {
        res[r].innerHTML = p1.name
      } else if (p2.moves.has(r+1)) {
        res[r].innerHTML = p2.name
      } else {
        res[r].innerHTML = "-"
    } 
  }
}

// FOR TESTING
function randomPlay () {
  let arr = [1,2,3,4,5,6,7,8,9]
  
  function shake(arr) {
    for(let i = arr.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }  
  shake(arr)
  
  p1.moves.add(arr.pop())
  p2.moves.add(arr.pop())
  p1.moves.add(arr.pop())
  p2.moves.add(arr.pop())
  inpPly.value = Math.ceil(Math.random()*9)
}

// startGame()
// randomPlay()
// displayRes()
