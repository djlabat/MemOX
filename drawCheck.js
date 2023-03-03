import { btnPly, players} from "./const.js"

export default function drawCheck () {
    if (players[0].moves.size == 5) {
        btnPly.style.backgroundColor = 'orange'  
        btnPly.innerHTML = "NERESENO"
        return true
    }
}