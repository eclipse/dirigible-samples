var base64 = require("utils/v4/base64");
var response = require("http/v4/response");

var input = "PT4/";
var result = base64.decode(input);

console.log("decoded: " + result);
response.println(JSON.stringify("decoded: " + result));

response.flush();
response.close();