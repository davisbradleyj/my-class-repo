// given two variables, return an object modeling a rectangle using those variables as height and width


function Rectangle(a, b) {
    this.length = a
    this.width = b
    this.permimeter = 2*(a+b)
    this.area = a*b
}

console.log(Rectangle(4,5))