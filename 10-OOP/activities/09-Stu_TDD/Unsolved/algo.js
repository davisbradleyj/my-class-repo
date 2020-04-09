function Algo() {}

    Algo.prototype.reverse = function (str) {
        var reversed = "";
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    };

    Algo.prototype.isPalindrome = function (str) {
        var rtnStr = "";
        for (var i = str.length - 1; i >= 0; i--) {
            rtnStr += str[i];
            if (str === rtnStr) {
                return true;
            }
        }
        return false;
    };

    // Algo.prototype.capitalize = function (str) {
        // var toUpper = "";
        // for (var i = 0; 0 < str.length; i++) {
        //     toUpper.toUpperCase(str[i])
        // }
        // return toUpper;

        
    // }

module.exports = Algo;