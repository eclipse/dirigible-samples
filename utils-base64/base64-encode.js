var base64 = require("utils/v4/base64");
var response = require("http/v4/response");

var input = [61, 62, 63];
var result = base64.encode(input);

console.log("encoded: " + result);
response.println(JSON.stringify("encoded: " + result));

response.flush();
response.close();