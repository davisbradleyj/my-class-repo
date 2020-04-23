//  YOUR WORK HERE
function addDig (num){
    var str = num.toString();
    while (str.length>1) {
        var sum = 0
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str[i])
        }
        str = sum.toString()
        console.log(str)
    }   
    return parseInt(str)
}
console.log(addDig(1314145))