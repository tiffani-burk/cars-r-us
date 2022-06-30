import { technologies } from "./tech.js"
import { wheels } from "./wheels.js"
import { interiors } from "./interior.js"
import { paints } from "./paint.js"

//creating main HTML representation for the document
export const mainHMTL = () => {
    return `
    <h1>Cars-R-Us </h1>
    <section class="choices">
        <article class="paint-choices">
        <h2>hello</h2>
        ${paints()}
        </article>
        <article class="interior-choices">
        ${interiors()}
        </article>
        <article class="wheels-choices">
        ${wheels()}
        </article>
        <article class="tech-choices">
        ${technologies()}
        </article>
    </section>`
}

//create a click event to add the order to the screen


