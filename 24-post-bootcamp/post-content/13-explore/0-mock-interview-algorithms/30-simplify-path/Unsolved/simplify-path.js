// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
  let arr = path.split("/")
  console.log(arr)
  let str = []
  for (let i = 0; i<arr.length; i++) {
    if (!arr[i]){
      continue;
    }
    if (arr[i] === ".") {
      continue;
    }
    if (arr[i] === "..") {
      str.pop();
      continue
    }
    str.push(arr[i])
    // console.log(str)
  }
  str = str.join("/");
  console.log("/" + str)
  return `/${str}`
};

console.log(simplifyPath('/a//b////c/d//././/..'))