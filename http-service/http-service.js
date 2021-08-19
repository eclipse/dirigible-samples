var request = require("http/v4/request");
var response = require("http/v4/response");

var method = request.getMethod();

response.println("[Method]: " + method);
response.flush();
response.close();