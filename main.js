// IDEJA: DRUGACIJE SAM MOGAO DA ORAGANIZUJEM PLEYERE:
// const players = [p1, p2] // da players[0] bude uvek current, a players[1] je drugi
// ako dreba da ih swichujem => players.reverse()

/*
Skor da se upisuje u localStorage
Responsive design BS5
resDisplay se prikazuje samo na GAME OVER.*/

// MemOX
const p1 = {name: "Teodor", moves: new Set([]), color: "#0ff"}
const p2 = {name: "Lena", moves: new Set([]), color: "#f88"}
const players = [p1, p2]
// let curPlyr = p1;

const whoPly = document.querySelector("#who-ply")
const plyrName = document.querySelector(".plyr-name")
const wherePlyd = document.querySelector("#where-plyd")
const form = document.querySelector('#form')
const guide = document.querySelector('#guide')
const inpPly = document.querySelector('#inp-play')
const btnPly = document.querySelector('#btn-ply')
const btnRst = document.querySelector('#btn-rst')
const winner = document.querySelector("#winner")
const explain = document.querySelector("#explain")
const curScr = document.querySelector("#cur-scr")
const gameOver = document.querySelector("#game-over")
const res = [...document.querySelectorAll('.res')]
const mainHTML = document.querySelector('main')

// BUTTONS
form  .addEventListener("submit", play)
btnRst.addEventListener("click", startGame)

function startGame (e) {
  // e.preventDefault()

  p1.moves.clear()
  p2.moves.clear()
  plyrName.innerHTML = players[1].name
  btnPly.disabled = false
  btnPly.style.backgroundColor = "green"
  btnPly.innerHTML ="SLEDECI!"
  inpPly.disabled = false
  inpPly.value = 1
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
  // displayRes() 
}

function play (e) {
  let br = e.target[0].value // BROJ KOJI SE SUBMITUJE IY FORM-INPUTA
  guide.innerHTML = ""

  // DA FORM-a NE BI SLALA PODATKE NA SERVAR, JER NAM TO SAD NE TREBA.
  e.preventDefault() 

  // DOUBLE PLAY CHECK
  if (p1.moves.has(+br) || p2.moves.has(+br)) {doubleEnd(br)}

  players[0].moves.add(+br)
  wherePlyd.innerHTML = `Poslednji potez je ${players[0].name} → ${br}`

  if (winCheck(players[0])) return endGame()
  if (drawCheck()) return endGame()
  
  // displayRes()

  // FARBANJE
  mainHTML.style.backgroundColor = players[1].color + '6'
  whoPly.style.color = players[1].color
  whoPly.innerHTML = `Na potezu je ${players[1].name}`
  
  plyrName.style.color = players[1].color
  plyrName.innerHTML = players[1].name

  players.reverse()
}
function doubleEnd (br) {
  btnPly.style.backgroundColor = players[1].color
  btnPly.innerHTML = `Pobedjuje ${players[1].name}!`
  explain.innerHTML = `😕 "${players[0].name[0]}" gazi "${p1.moves.has(+br) ? p1.name[0] : p2.name[0]}" na polju ${br}! <br> ❌ Zabranjeno gazenje.<br> 😟 ${players[0].name} gubi partiju.`
  players[0].moves.add(br)
  endGame()
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
    btnPly.style.backgroundColor = pX.color  
    btnPly.innerHTML = `POBEDJUJE ${pX.name}`
    if (pX == p1) btnPly.style.backgroundColor = p1.color
    else btnPly.style.backgroundColor = p2.color
    return true
  }
}

function drawCheck () {
  if (players[0].moves.size == 5) {
    btnPly.style.backgroundColor = 'orange'  
    btnPly.innerHTML = "NERESENO"
    return true
  }
}

function endGame() {
  curScr.innerHTML = `${p1.name} je igrao na poljima: ${[...p1.moves]} <br>
  ${p2.name} je igrao na poljima: ${[...p2.moves]}`
  btnPly.disabled=true
  inpPly.disabled = true
  displayRes()
}

function displayRes () {
  for (let r=0; r<9; r++) {
    if (p1.moves.has(r+1)) { // Ako u potezima p1 ima 1,2,3,4...
      if (/\D/.test(res[r].innerHTML)) { // ako je upisan neki NEbroj, onda stavi novo slovo pored njega.
        res[r].style.color = p1.color
        res[r].innerHTML += p1.name[1]  
      } else {
        res[r].style.color = p1.color
        res[r].innerHTML = p1.name[0] // Upisi Prvo slovo igraca
      }
    } else if (p2.moves.has(r+1)) {
      if (/\D/.test(res[r].innerHTML)) { // ako je upisan neki NEbroj, onda stavi novo slovo pored njega.
        res[r].style.color = p2.color
        res[r].innerHTML += p1.name[1]  
      } else {
        res[r].style.color = p2.color
        res[r].innerHTML = p2.name[0]
      }
    } else {
      res[r].innerHTML = r - -1
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
