// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
    //your code here
    url = url.replace(/^https?:\/\//,'').replace(/^http?:\/\//,'').replace(/^www\./,'').split('.')
    console.log(url)
    return url[0]
}

console.log(domainName("http://www.google.com"))