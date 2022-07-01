import { getPaints } from "./database.js";

const paintChoices = getPaints()

export const paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint-dropdown">'
    html += '<option value= "0">Silver</option>'
    
    let paintItemArray = paintChoices.map(paintChoice => {
        return `<option value="${paintChoice.id}">${paintChoice.color}</option>`
    })

    html += paintItemArray.join("")
    html += "</select>"
    return html
}
//create an event listener for the paint choices