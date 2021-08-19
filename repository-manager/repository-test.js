var response = require("http/v4/response");
var repositoryManager = require("repository/v4/manager");

repositoryManager.createResource("/registry/public/test/file.js", "console.log('Hello World');", "application/json");
var resource = repositoryManager.getResource("/registry/public/test/file.js");
var content = resource.getText();

response.println(content);
response.flush();
response.close();