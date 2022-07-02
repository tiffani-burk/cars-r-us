import { technologies } from "./tech.js"
import { wheels } from "./wheels.js"
import { interiors } from "./interior.js"
import { paints } from "./paint.js"
import { addCustomOrder } from "./database.js"

//creating main HTML representation for the document
export const mainHMTL = () => {
    return `
    <h1>Cars-R-Us </h1>
    <section>
        <div class="choices">
        <article id="paint-choices" class="options">
        ${paints()}
        </article>
        <article id="interior-choices" class="options">
        ${interiors()}
        </article>
        <article id="wheels-choices" class="options">
        ${wheels()}
        </article>
        <article id="tech-choices" class="options">
        ${technologies()}
        </article>
        </div>
        <br>
        <div class="button-container">
        <button id="button">Custom Order </button>
        </div>
    </section>`
}

//create a click event to add the order to the screen
//PROBLEM: addCustomOrder() not working 

document.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target

        if(buttonClicked.id === "button"){
            addCustomOrder() //invoking the function responsible for taking temp state and making it permanant 
    
        }
    }
)
