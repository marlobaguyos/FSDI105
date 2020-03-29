//object literal

const salon = {
    name:"The Fashion Pet",
    phone:"3255-78493",
    address:{
        street:"Av. Insurgentes",
        number:"456"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

console.log(salon);

let {name,phone,address:{street,number},workingHours:{days,open,close}} = salon;