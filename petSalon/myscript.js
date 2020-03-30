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

//object constructor

class Pet{
    constructor(name,age,gender,breed,service,ownerName,ownerContact){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.ownerContact = ownerContact;
        this.hunger = 10;
        this.happiness = 5;
    }

    ownerInfo = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.ownerContact);
    }

    feed = function() {
        this.hunger-=5;
        this.happiness+=5;
        console.log("Feeding ...");
    }


}

const pet1 = new Pet("Shaggy",2,"male","boxer","Shower","Samantha","4857348");
const pet2 = new Pet("Janis", 3, "Female", "Boxer", "Haircut", "Sabrina", "78657459");

pet1.ownerInfo();
pet2.ownerInfo();

pet1.feed();