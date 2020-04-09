const dogRain = process.argv[2]
const catRain = process.argv[3]

const dogs = {
    raining = dogRain,
    noise = "WOOF!",
    makeNoise: function() {
        if (this.raining === true) {
        console.log(this.noise);
        }
    }
}

const cats = {
    raining = catRain,
    noise = "MEOW!",
    makeNoise: function() {
        if (this.raining === true) {
        console.log(this.noise);
        }
    }
}

function massHysteria(dog, cat)


