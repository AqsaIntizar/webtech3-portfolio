class Wheater {
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        console.log("ILOVEPANDAAAS");

        this.initialize();
    }

    initialize() {
        this.getMyLocation();
    }

    getMyLocation(){
        console.log("Getting location 🚀");
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);

        }, err =>{
            console.log("error");
        });
    }
    getWeather(lat, lng){

        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}`;
        fetch(url).then(response=>{
            return response.json();
        })
        .then(json =>{
        console.log(json.currently.summary);
        //document.write(json.currently.summary);
        document.getElementById("weather").innerHTML = json.currently.summary;
        

        });

    }

}
class Weapons{
    constructor(){
        
        this.initialize();
    }

    initialize() {
        this.getWeapon();
    }
    getWeapon(){

        let url = `https://cors-anywhere.herokuapp.com/https://fortnite-public-api.theapinetwork.com/prod09/items/list`;
        fetch(url).then(response=>{
            return response.json();
        })
        .then(json =>{
        //console.log(json)

        //document.write(json[1].name);
        document.getElementById("weapon").innerHTML =json[1].name;


       //document.write(json[1]['images'].background);
       let img = document.createElement("img");
       img.src = json[1]['images'].background;

       document.body.appendChild(img);
       //document.getElementsByClassName("img").src = json[1]['images'].background;
        });

    }
 

}

let app = new Wheater("31c4c7fa5f82269dbea3c6a366e4704b");
let app2 = new Weapons();