var httpClient = require("http/v4/client");
var response = require("http/v4/response");

var bodyContent = JSON.stringify({
    firstName: "John",
    lastName: "Doe",
    age: 24
});

var httpResponse = httpClient.put("http://httpbin.org/put", {
    text: bodyContent
});

response.println(httpResponse.statusMessage);
response.println(httpResponse.text);
response.flush();
response.close();