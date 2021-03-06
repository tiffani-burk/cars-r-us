import { technologies } from "./tech.js"
import { wheels } from "./wheels.js"
import { interiors } from "./interior.js"
import { paints } from "./paint.js"
import { Orders } from "./order.js"


//creating main HTML representation for the document
export const mainHMTL = () => {
    return `
    <h1>Cars-R-Us </h1>
    <h3>Build Your Vehicle</h3>
    <div class="line"><div>
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
        <article class="orders">
        ${Orders()}
        </article>
    </section>`
}

