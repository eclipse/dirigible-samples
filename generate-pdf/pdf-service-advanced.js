var response = require("http/v4/response");
var pdfDocuments = require("documents/v4/pdf");

var data = {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    columns: [{
        name: "Id",
        key: "id"
    }, {
        name: "Name",
        key: "name",
    }, {
        name: "Position",
        key: "position"
    }],
    rows: []
};

for (let i = 0; i < 100; i++) {
    data.rows.push({
        id: "" + i,
        name: "John",
        position: "Software Developer",
        highlight: i % 2 == 0,
        breakAfter: ((i + 1) % 10 == 0)
    })
}

var config = {
    size: "A3",
    alignColumns: "center",
    alignRows: "end"
};
var pdf = pdfDocuments.generateTable(data, config);


response.setContentType("application/pdf");
response.setHeader('Content-Disposition', 'filename="data.pdf"');
response.write(pdf);
response.flush();
response.close();