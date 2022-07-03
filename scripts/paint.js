import { getPaints, setPaint } from "./database.js";

const paintChoices = getPaints()

export const paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint-dropdown">'
    html += '<option value= "0">Select</option>'
    
    let paintItemArray = paintChoices.map(paintChoice => {
        return `<option value="${paintChoice.id}">${paintChoice.color}</option>`
    })

    html += paintItemArray.join("")
    html += "</select>"
    return html
}
//create an event listener for the paint choices
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paintChoice") {
          setPaint(parseInt(changeEvent.target.value))//store the user's choice in your database.
        }
    }
)