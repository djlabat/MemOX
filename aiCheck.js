import {p1, p2, players, winCombs} from "./const.js"
export {AiCriticalLosingCheck, AiCriticalWiningCheck}

function AiCriticalLosingCheck () {
  // NALAZENJE KRITICNOG POBEDNICKOG POTEZA (kojem fali jos jedan potez)
  // od p1, p2 treba da spreci. p1=Teo p2=Komp
  for (let comb of winCombs) { // RASPAKIVANJE NIZA winCombs...
    let tmp=0
    for (let cBr of comb) { // ...RASPAKIVANJE KOMBINACIJA...
      for (let mBr of [...players[1].moves]) { // ... brojeva seta
        // find
        if (cBr == mBr) { // porede se svi winComb-brojevi sa potezima igraca
          tmp++
          if (tmp == 2) { // ↓ razlika 2 niza
            let criticField = comb.filter(wcbr => ![...players[1].moves].includes(wcbr))
            let isEmpty = ! (p1.moves.has(+criticField) || p2.moves.has(+criticField))
              
            if (isEmpty) {return criticField}
            else {tmp = 0}
          }
        }
      }
    }
  }
}

function AiCriticalWiningCheck () {
  // NALAZENJE KRITICNOG POBEDNICKOG POTEZA (kojem fali jos jedan potez)
  // od p1, p2 treba da spreci. p1=Teo p2=Komp
  for (let comb of winCombs) { // RASPAKIVANJE NIZA winCombs...
    let tmp=0
    for (let cBr of comb) { // ...RASPAKIVANJE KOMBINACIJA...
      for (let mBr of [...players[0].moves]) { // ... brojeva seta
        // find
        if (cBr == mBr) { // porede se svi winComb-brojevi sa potezima igraca
          tmp++
          if (tmp == 2) { // ↓ razlika 2 niza
            let criticField = comb.filter(wcbr => ![...players[0].moves].includes(wcbr))
            let isEmpty = ! (p1.moves.has(+criticField) || p2.moves.has(+criticField))
              
            if (isEmpty) {return criticField}
            else {tmp = 0}
          }
        }
      }
    }
  }
}