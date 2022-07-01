const database = {
    orderBuilder:{}, //empty object to build custom orders into later
    paint: [{
        id: 1,
        color: "Silver",
        price: 500
    },
    {
        id: 2,
        color: "Midnight Blue",
        price: 500
    },
    {
        id: 3,
        color: "Firebrick Red",
        price: 500
    },
    {
        id: 4,
        color: "Spring Green",
        price: 500
    }
],
    wheels: [{
        id: 1,
        name: "17-inch Pair Radial",
        price: 200
    },
    {
        id: 2,
        name: "17-inch Pair Radial Black",
        price: 500
    },
    {
        id: 3,
        name: "18-inch Pair Spoke Silver",
        price: 600
    },
    {
        id: 4,
        name: "18-inch Pair Spoke Black",
        price: 800
    }
],
    technology: [{
        id: 1,
        name: "Basic Package (basic sound system)",
        price: 0
    },
    {
        id: 2,
        name: "Navigation Package (includes integrated navigation controls)",
        price: 499
    },
    {
        id: 3,
        name: "Visibility Package (includes side and reat cameras)",
        price: 999.00
    },
    {
        id: 4 ,
        name: "Ultra Package (includes navigation and visibility packages)",
        price: 1999.00
    }

],
    interior:[{
        id: 1,
        name: "Beige Fabric ",
        price: 0
    },
    {
        id: 2,
        name: "Charcoal Fabric",
        price: 0
    },
    {
        id: 3,
        name: "White Leather",
        price: 800
    },
    {
        id: 4 ,
        name: "Black Leather",
        price: 800
    }
],
customOrders: {
    id: 1,
    techId: 3, 
    wheelId: 4, 
    interiorId: 2, 
    paintId: 4, 
    timestamp: 3427849283
}
}

//export functions with access to data from database
export const getTechs = () => {
    return database.technology
}
export const getWheels = () => {
    return database.wheels
}
export const getInteriors = () => {
    return database.interior
}
export const getPaints = () => {
    return database.paint
}
export const getOrders = () => {
    return database.customOrders
}

//setter functions 
export const setTechs = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

//create a function whose role is to take the temp states stores to orderBuilder and make them permanant 
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}//copies current state of user choices

    const lastIndex = database.customOrders.length - 1 //add new primary key to the object

    newOrder.id = database.customOrders[lastIndex] + 1

    newOrder.timestamp = Date.now() //add timestamp to order

    database.customOrders.push(newOrder)//adds a newOrder object to customOrder state

    database.orderBuilder = {}//reset the temp state for user choices

    document.dispatchEvent(new CustomEvent("stateChanged"))//Broadcast notification that the permanant state has changed
}