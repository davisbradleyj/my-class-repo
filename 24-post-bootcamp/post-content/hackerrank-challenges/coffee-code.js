var your_drink = "Flat White ";
var reverse = function(s){
    return s.split("").reverse().join("")
}
var barista = {
    str1: "ion",
    str2: reverse("rcne"),
    str3: "ypt",
    request: function (pref) {
        return pref + "Secret Word: " + this.str2 + this.str3 + this.str1
    }
}

console.log(barista.request(your_drink))