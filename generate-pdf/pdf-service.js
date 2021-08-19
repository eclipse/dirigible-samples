var response = require("http/v4/response");
var pdfDocuments = require("documents/v4/pdf");

var data = {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia fermentum magna, sit amet accumsan felis auctor ac.",
    columns: [{
        name: "Id",
        key: "id"
    }, {
        name: "First Name",
        key: "firstName",
    }, {
        name: "Last Name",
        key: "lastName"
    }, {
        name: "Age",
        key: "age"
    }],
    rows: [{
        id: 1001,
        firstName: "John",
        lastName: "Doe",
        age: 29
    }, {
        id: 1002,
        firstName: "Jane",
        lastName: "Doe",
        age: 26
    }, {
        id: 1003,
        firstName: "Joe",
        lastName: "Doe",
        age: 44
    }, {
        id: 1004,
        firstName: "Jill",
        lastName: "Doe",
        age: 40
    }]
};

var pdf = pdfDocuments.generateTable(data);

response.setContentType("application/pdf");
response.setHeader('Content-Disposition', 'filename="data.pdf"');
response.write(pdf);
response.flush();
response.close();