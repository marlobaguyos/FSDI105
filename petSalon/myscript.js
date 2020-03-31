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

//console.log(salon);

let {name,phone,address:{street,number},workingHours:{days,open,close}} = salon;

//object constructor
var c = 0;
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
        this.id='pet' + c;
        c+=1;
    }

    ownerInfo = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.ownerContact);
    }

    feed = function() {
        this.hunger-=5;
        this.happiness+=5;
        console.log("Feeding ...");
    }
    status = function() {
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
}

const pet1 = new Pet("Shaggy",2,"male","boxer","Shower","Samantha","4857348");
const pet2 = new Pet("Janis", 3, "Female", "Boxer", "Haircut", "Sabrina", "78657459");
const pet3 = new Pet("Ozzy", 6, "Male", "Mixed", "Shower", "Omar", "5876844");

pet1.ownerInfo();
pet2.ownerInfo();
pet2.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.status();
pet1.feed();
pet1.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname=document.getElementById('txtName');
var textage=document.getElementById('txtAge');
var textgender=document.getElementById('txtgender');
var textbreed = document.getElementById('txtbreed');
var textservice = document.getElementById('txtservice');
var  textowner = document.getElementById('txtOname');
var textcontact = document.getElementById('txtcontact')

function register(){
    // console.log(textname.value);
    // console.log(textage.value);
    // console.log(textgender.value);
    // console.log(textbreed.value);
    // console.log(textservice.value);
    // console.log(textowner.value);
    // console.log(textcontact.value);

    const thePet = new Pet(textname.value, textage.value, textgender.value, textbreed.value, textservice.value, textowner.value, textcontact.value);
    salon.pets.push(thePet);
    alert("you registered a new pet.");
    clear();
    display(thePet);
}

function clear(){
    textname.value="";
    textage.value="";
    textgender.value="";
    textbreed.value="";
    textowner.value="";
    textservice.value="";
    textcontact.value="";
}

function display(aPet){
    var tbody=document.getElementById('rowPet');

    var row = `<tr id='${aPet.id}'>
                    <td> ${aPet.name}</td>
                    <td> ${aPet.age}</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><button>Delete</button></td>
                </tr>`;
    tbody.innerHTML+=row;
}

display(pet1);
display(pet2);
display(pet3);