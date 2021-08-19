var digest = require("utils/v4/digest");
var response = require("http/v4/response");

var input = [61, 62, 63];
var result = digest.sha512(input);

console.log(result);
response.println(JSON.stringify(result));

response.flush();
response.close();