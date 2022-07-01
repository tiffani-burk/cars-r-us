import { getWheels } from "./database.js";

const wheelChoices = getWheels()

//This is right, fix paint, interior, and tech
export const wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels-dropdown"'
    html +=  '<option value= "0">Select Wheels</option>'

    let listItemArray = wheelChoices.map(wheelChoice => {
       return `<option value="${wheelChoice.id}">${wheelChoice.name}</option>`
    })

    html += listItemArray.join("")
    html += "</select>"
    return html
}

//create an event listener for the wheels choices
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels-dropdown") {
            window.alert (`wheels are selected`)
        }
    }
)