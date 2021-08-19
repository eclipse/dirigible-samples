var response = require("http/v4/response");
var mail = require("mail/v4/client");

var mailConfig = {
    "mail.user": "<your-mailbox-user>",
    "mail.password": "<your-mailbox-password>",
    "mail.transport.protocol": "smtps",
    "mail.smtps.host": "smtp.gmail.com",
    "mail.smtps.port": "465",
    "mail.smtps.auth": "true"
};

var mailClient = mail.getClient(mailConfig);

var from = "<your-mailbox-user>@gmail.com";
var recipients = {
    to: "<your-mailbox-user>@gmail.com",
    cc: ["<your-mailbox-user>@gmail.com", "<your-mailbox-user-2>@sap.com"],
    bcc: "<your-mailbox-user>@sap.com"
};
var subject = "Subject";
var content = "<h1>Content</h1>";
var subType = "html";

mailClient.send(from, recipients, subject, content, subType);

response.println("Mail sent");