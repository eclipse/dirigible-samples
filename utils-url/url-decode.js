var url = require("utils/v4/url");
var response = require("http/v4/response");

var input = "http%3A%2F%2Fwww.dirigible.io%2F";
var result = url.decode(input, "UTF-8");

console.log("Decoded URL: " + result);
response.println(JSON.stringify(result));

response.flush();
response.close();