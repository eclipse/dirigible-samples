var hex = require("utils/v4/hex");
var response = require("http/v4/response");

var input = "414243";
var result = hex.decode(input);

console.log("decoded: " + result);
response.println(JSON.stringify(result));

response.flush();
response.close();