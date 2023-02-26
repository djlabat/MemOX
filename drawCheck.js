export default function drawCheck (players, btnPly) {
    if (players[0].moves.size == 5) {
        btnPly.style.backgroundColor = 'orange'  
        btnPly.innerHTML = "NERESENO"
        return true
    }
}