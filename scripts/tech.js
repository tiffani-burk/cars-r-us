import { getTechs } from "./database";

const techChoices = getTechs()

export const technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech-dropdown"'
    html += `<option value= "0">Basic Package (basic sound system)</option>
    `
    let listItemArray = techChoices.map(techChoice => {
      return `<option value="${techChoice.id}">${techChoice.name}</option>`
    }) 

    html + listItemArray.join("")
    html + "</select>"
    return html
}

//create an event listener for the tech choices