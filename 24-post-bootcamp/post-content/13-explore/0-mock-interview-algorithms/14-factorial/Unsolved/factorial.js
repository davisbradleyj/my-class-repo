// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {

    var val = 1
    for (var i = num; i > 1; i--) {
        val = val * i
    }

    return val

};
