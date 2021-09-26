//Task Day 8 (Q.1)
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        }
        getPG() {
            const newArr = [];
            for(let i=0; i<arr.length; i++) {
               if(arr[i].rating == "PG"){
                newArr.push(arr[i]);
               }
            }
            console.log(newArr);
        }
}

//a.
const gFather = new Movie("Godfather","Paramount Pictures","R");
console.log(gFather);

//b.
const batman = new Movie("Dark Knight Rises","Warner Bros Pictures");
console.log(batman);

//c.
const hRam = new Movie("Hey Ram","Raj Kamal Films","PG");
const depart = new Movie("Departed","Plan B Entertainment","R");
const bombay = new Movie("Bombay","Madras Talkies","PG15");
const nayagan = new Movie("Nayagan","Madras Talkies","PG");
const arr = [gFather,batman,hRam,depart,bombay,nayagan];
arr[0].getPG();

//d.
const cRoyale = new Movie("Casino Royale","Eon Productions","PG13");
console.log(cRoyale);

//Task Day 8 (Q.3)
class Person {
    constructor(name, gender, dob, occupation, place){
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.occupation = occupation;
        this.place = place;
    }
}

const person1 = new Person("Gokul","Male","Dec01","Student","Chennai");
console.log(person1);

//Task Day 8 (Q.4)
class Uber {
    constructor(distance,vehicle_type,kmCost,time) {
        this.distance = distance;
        this.vehicle_type = vehicle_type;
        this.kmCost = this.getVtype();
    }
    getVtype(vehicle_type) {
        if (this.vehicle_type == "SUV"){
           return this.kmCost = Number(11);
        } else if (this.vehicle_type == "Sedan"){
           return this.kmCost = Number(10);
        } else {
           return this.kmCost = Number(8);
        }
    }
    getPrice(){
        const costIs = this.distance * this.kmCost;
        console.log(costIs);
    }
}

const travel1 = new Uber(35,"SUV");
console.log(travel1);
travel1.getPrice();

const travel2 = new Uber(75,"Sedan");
console.log(travel2);
travel2.getPrice();
