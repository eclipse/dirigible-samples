var response = require("http/v4/response");
var mail = require("mail/v4/client");

var from = "from@email.address";
var to = "to@email.address";
var subject = "Subject";
var content = "<h1>Content<h1>";
var subType = "html";

mail.send(from, to, subject, content, subType);

response.println("Mail sent");