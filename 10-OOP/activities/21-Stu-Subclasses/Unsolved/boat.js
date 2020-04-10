const Vehicle = require("./vehicle");

class Boat extends Vehicle {
    constructor(crew) {
        this.crew = crew
    }
    crewSoundOff() {
        this.crew.array.forEach(element => {
            console.log(element)
        });
    }
}



