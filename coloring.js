import {mainHTML, whoPly} from "./const.js"
export default coloring

function coloring (pX) {
    mainHTML.style.backgroundColor = pX.color + '6'
    whoPly.style.color = pX.color
    whoPly.innerHTML = `Na potezu je ${pX.name}`
}