import { getTechs } from "./database";

const techChoices = getTechs()

export const technologies = () => {
    let html = "<ul>"

    let listItemArray = interiorChoices.map(techChoices) => {

    return `<h2>Technologies</h2>
    <select id="tech-dropdown">
    <option value= "0">Basic Package (basic sound system)</option>
    <option value= "1">Navigation Package (includes integrated navigation controls)</option>
    <option value= "2">Visibility Package (includes side and reat cameras)"</option>
    <option value= "3">Ultra Package (includes navigation and visibility packages)</option>
    </select> `
}

//create an event listener for the tech choices