var httpClient = require("http/v4/client");
var response = require("http/v4/response");

var httpResponse = httpClient.get("https://services.odata.org/V4/Northwind/Northwind.svc/");

response.println(httpResponse.statusMessage);
response.println(httpResponse.text);
response.flush();
response.close();