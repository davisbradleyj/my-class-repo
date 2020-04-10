const Vehicle = require("./vehicle");

class Car extends Vehicle {
    constructor (color, passengers) {
        this.color = color;
        this.passengers = passengers;
    }
    checkPass() {
        if (this.passengers <= 5) {
            return true;
        } else {
            console.log("CAN'T SIT HEAH!")
        }
    }
}






