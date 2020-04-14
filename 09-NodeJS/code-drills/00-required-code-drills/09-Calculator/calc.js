var one = (process.argv[2]);
var two = (process.argv[3]);
var three = (process.argv[4]);
var result;

if (one === "add") {
    result = parseFloat(two) + parseFloat(three);
    console.log(result);
} else if (one === "subtract") {
    result = parseFloat(two) - parseFloat(three);
    console.log(result);
} else if (one === "multiply") {
    result = parseFloat(two) * parseFloat(three);
    console.log(result);
} else if (one === "divide") {
    result = parseFloat(two) / parseFloat(three);
    console.log(result);
}else if (one === "remainder") {
    result = parseFloat(two) % parseFloat(three);
    console.log(result);
} else {
    result = "Not an appropriate operation";
    console.log(result);
}