import { getInteriors, setInterior } from "./database.js";

const interiorChoices = getInteriors()

export const interiors = () => {

    let html = "<h2>Interiors</h2>"

    html += `<select id=id="interior-dropdown">`
    html += `<option value= "0">Beige Fabric</option>`

    let listItemArray = interiorChoices.map(interiorChoice => {
    return `<option value= "${interiorChoice.id}" >${interiorChoice.name}</option> `  
    })

   html + listItemArray.join("")
   html + "</select>"
   return html
}

//create an event listener for the interior choices;window alert
document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "interior"){
            setInterior(parseInt(changeEvent.target.value))
        }
    }

)
