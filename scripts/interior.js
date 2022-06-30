import { getInteriors, setInterior } from "./database.js";

const interiorChoices = getInteriors()

export const interiors = () => {

    let html = "<ul>"

    let listItemArray = interiorChoices.map(interiorChoice => {
    return `<h2>Interiors</h2>
    <select id="interior-dropdown">
    <option value= "0">Beige Fabric</option>
    <option value= "1">Charcoal Fabric</option>
    <option value= "2">White Leather</option>
    <option value= "3">Black Leather</option>
    </select> `  
    })

   html + listItemArray.join("")
   html + "</ul>"
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
