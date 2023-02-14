// const render = require("./server.js")
// latest ver
/*
Nacini da se zavrsi partija:
1.) POBEDA X O
2.) NERESENO fix
3.) ISTI POTEZ X O

*/
// Memox
const p1 = {name: "X", moves: new Set([8,2])}
const p2 = {name: "O", moves: new Set([4])}
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
const [res1, res2, res3, res4, res5, res6, res7, res8, res9] = [...document.querySelectorAll('.res')]

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
  console.log("%cNOVA PARTIJA JE ZAPOCETA!", "color:#0ff")
}

function play (e) {
  // !!!!!!!!!ZAMENITI srcElement!!!!!!!!!!
  let br = e.srcElement[0].value // BROJ IZ HTML INPUTA
  
  // DA FORM-a NE BI SLALA PODATKE NA SERVAR, JER NAM TO SAD NE TREBA.
  e.preventDefault() 

  // PROVERA DA LI JE DUPLIRAN POTEZ
  if (p1.moves.has(+br) || p2.moves.has(+br)) {
    if (!confirm(`To polje je vec odigrano! Izvini ${curPlyr.name}... Ali to ne sme da se radi. Diskvalifikovan si! Prihvatas li poraz?`)) return
    else {    
      // alert(`Potez je vec odigran! Pobednik je ${curPlyr.name}`)
      console.log(`Bravo ${curPlyr.name}! Pola poraza ti je oprosteno samim tim sto si prihvatio poraz.`)
      alert(`Bravo ${curPlyr.name}! Pola poraza ti je oprosteno samim tim sto si prihvatio poraz.`)

      endGame()
    }
  }
  curPlyr.moves.add(+br)
  wherePlyd.innerHTML = `${curPlyr.name} je igrao na polje ${br}`

  if (winCheck(curPlyr)) return endGame()
  if (drawCheck()) return endGame()
  switchPlayer()
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
    winner.innerHTML += `Winner is ${pX.name}`
    return true
  }
}

function drawCheck () {
  if (curPlyr.moves.size == 5) {
    winner.innerHTML += "Neresena partija!"
    return true
  }
}

function switchPlayer() {
  curPlyr = curPlyr==p1 ? p2 : p1
  displayRes()
  if (curPlyr == p1) {
    whoPly.textContent = `Na potezu je: ${curPlyr.name}`
    instr.style.color = "#88f"
  }
  else {
    whoPly.textContent = `Na potezu je: ${curPlyr.name}`
    instr.style.color = "#f88"
  }
}


function endGame() {
  displayRes()
  endMsg.innerHTML += `${p1.name} je igrao na poljima: ${[...p1.moves]} <br>
${p2.name} je igrao na poljima: ${[...p2.moves]}`
  gameOver.innerHTML += "<br>======== GAME OVER ======="
  btnPly.disabled=true
}

function displayRes () {
  let res = [ [],[],[] ]
  for (let r=0; r<3; r++) {
    for (let k=0; k<3; k++) {
      if (p1.moves.has(r*3+k+1)) {
        res[r][k]=p1.name
      } else if (p2.moves.has(r*3+k+1)) {
        res[r][k]=p2.name
      } else {
        res[r][k]=""
      }
    } 
  }
  console.group("%cMemox", "color:#8f8")
  console.log(res[0])
  console.log(res[1])
  console.log(res[2])
  console.log("---------------------------")
  console.groupEnd()
}

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
displayRes()
