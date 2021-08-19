var client = require("http/v4/client");
var response = require("http/v4/response");

var httpResponse = client.get("https://raw.githubusercontent.com/eclipse/dirigible/master/NOTICE.txt", {
    binary: true
});

response.println(httpResponse.statusMessage);
response.println(JSON.stringify(httpResponse.data));
response.flush();
response.close();