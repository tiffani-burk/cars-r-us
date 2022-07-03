import { getInteriors, setInterior } from "./database.js";

const interiorChoices = getInteriors()

//createing html representaion of interior options and looping through the options and creating a dropdown menu
export const interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior-dropdown">'
    html += '<option value= "0">Select</option>'

    let interiorItemArray = interiorChoices.map(interiorChoice => {
        return `<option value= "${interiorChoice.id}" >${interiorChoice.name}</option>`
    })

    html += interiorItemArray.join("")
    html += "</select>"
    return html
}

//create an event listener for the interior choices;window alert
document.addEventListener(
    "change", //change event added because it is moving through options
    (changeEvent) => {

        if (changeEvent.target.name === "interiorChoice") {
           setInterior(parseInt(changeEvent.target.value))//store the user's choice in your database.
        }
    }
)
