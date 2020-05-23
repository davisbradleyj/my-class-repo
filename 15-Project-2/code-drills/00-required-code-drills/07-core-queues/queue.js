// YOUR WORK HERE

var Queue = function(data = []) {

    this.data = data

    this.add = function(value) {
        this.data.push(value)
    }

    this.remove = function () {
        return this.data.shift()
    }

    this.peek = function() {
        return this.data[0]
    }
}