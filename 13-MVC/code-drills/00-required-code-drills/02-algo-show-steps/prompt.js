function stairs(n) {

    for (var i = 1; 1 <= n; i++) {
        var str = "\"";
        str += "#".repeat(i);
        str += " ".repeat(n - i);
        str += "\"";
        console.log(str)
    }

}

stairs(8);