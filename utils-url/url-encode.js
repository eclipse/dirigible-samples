var url = require("utils/v4/url");
var response = require("http/v4/response");

var input = "http://www.dirigible.io/";
var result = url.encode(input, "UTF-8");

console.log("Encoded URL: " + result);
response.println(JSON.stringify(result));

response.flush();
response.close();