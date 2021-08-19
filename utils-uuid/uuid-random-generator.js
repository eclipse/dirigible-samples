var uuid = require("utils/v4/uuid");
var response = require("http/v4/response");

var generated = uuid.random();

console.log(generated);
uuid.validate(generated);

console.log("Randomly Generated UUID: " + generated);
response.println(JSON.stringify("Randomly Generated UUID: " + generated));

response.flush();
response.close();