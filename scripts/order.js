import { getPaints, getTechs, getWheels, getInteriors, getOrders  } from "./database.js";

const paints = getPaints()
const techs = getTechs()
const wheels = getWheels()
const interiors = getInteriors()



//Create function to calculate the total cost of the items that match the id of the nested functions
const buildOrderListItem = (order) => {
    //find the price of the chosen paint
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        } 
    )
    //find the price of the chosen tech
    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    //find price of chosen wheels
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
        //find price of chosen interior
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
        )
        
        //PROBLEM WITH ABOVE FUNCTIONS. .PRICE COMING BACK UNDEFINED!!!
        //store sum of values to a variable
        const totalCost = foundInterior.price + foundPaint.price + foundTech.price +foundWheels.price 
        
        //convert the number to a string with currency $ sign
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD" 
        }
        )
        //interpolate the price with HTML string 
        return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}
        </li>`
    }

    //Create a function to return a list of orders the customer places
    export const Orders = () => {
        const orders = getOrders()

        let html = "<ul>"

        const listItems = orders.map(buildOrderListItem)

        html += listItems.join("")

        html += "</ul>"

        return html
    }