import { mainHMTL } from "./HTMLmodule.js";


//set query selector to show html rep in the area with the id of container
const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = mainHMTL()
}

renderAllHTML()

//listening for the event of state to be changed "stateChanged"
document.addEventListener(
    "stateChanged", event =>{
        console.log("event changed")
        renderAllHTML()
    }
)