import { getWheels } from "./database.js";

const wheelChoices = getWheels

export const wheels = () => {
    return `<h2>Wheels</h2>
    <select id="wheels-dropdown">
    <option value= "0">17-inch Pair Radial</option>
    <option value= "1">17-inch Pair Radial Black</option>
    <option value= "2">18-inch Pair Spoke Silver</option>
    <option value= "3">18-inch Pair Spoke Black</option>
    </select> 
    `
}

//create an event listener for the wheels choices