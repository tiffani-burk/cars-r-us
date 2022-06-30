import { getPaints } from "./database.js";

const paintChoices = getPaints

export const paints = () => {
    return `<h2>Paints</h2>
    <select id="paint-dropdown">
    <option value= "0">Silver</option>
    <option value= "1">Midnight Blue</option>
    <option value= "2">Firebrick Red</option>
    <option value= "3">Spring Green</option>
    </select> 
    `
}
//create an event listener for the paint choices