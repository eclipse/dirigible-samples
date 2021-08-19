var response = require("http/v4/response");
var ftp = require("io/v4/ftp");

var host = "test.rebex.net";
var port = 21;
var userName = "demo";
var password = "password";

var ftpClient = ftp.getClient(host, port, userName, password);
var file = ftpClient.getFileText("/", "readme.txt");

response.println(file);