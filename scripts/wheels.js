import { getWheels } from "./database.js";

const wheelChoices = getWheels

export const wheels = () => {
    let html = "<ul>"

    let listItemArray = wheelChoices.map(wheelChoice => {
        return `<h2>Wheels</h2>
        <select id="wheels-dropdown">
        <option value= "0">17-inch Pair Radial</option>
        <option value= "1">17-inch Pair Radial Black</option>
        <option value= "2">18-inch Pair Spoke Silver</option>
        <option value= "3">18-inch Pair Spoke Black</option>
        </select> 
        `
    })

    html + listItemArray.join("")
    html + "</ul>"
    return html
}

//create an event listener for the wheels choices