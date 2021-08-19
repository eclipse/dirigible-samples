var hex = require("utils/v4/hex");
var response = require("http/v4/response");

var input = [65, 66, 67];
var result = hex.encode(input);

console.log("encoded: " + result);
response.println(JSON.stringify(result));

response.flush();
response.close();