import { getTechs, setTechs } from "./database.js";

const techChoices = getTechs()

export const technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech-dropdown"'
    html += '<option value= "0">Select</option>'
    
    let listItemArray = techChoices.map(techChoice => {
      return `<option value="${techChoice.id}">${techChoice.name}</option>`
    }) 

    html += listItemArray.join("")
    html += "</select>"
    return html
}

//create an event listener for the tech choices

document.addEventListener(
  "change",
  (changeEvent) => {

    if(changeEvent.target.name === "techChoice") {
      setTechs(parseInt(changeEvent.target.value)) //store the user's choice in your database.
    }
  }
) 
//checked the change event was targeting properly by first putting window.alert(`this has been clicked`) on line 27 