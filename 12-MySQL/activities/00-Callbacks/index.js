var fs = require("fs")

function one (str,fun1) {
    console.log(str)
    fun1()
}

function two (boo,fun2) {
    if (boo) {
    fun2()
    }
}

function three (f,v) {
    function subThree(){
    return f(v)
    }
    return subThree();
}

function four (){
    fs.writeFile("filestring",process.argv[2],function(err) {
    })
}
four()