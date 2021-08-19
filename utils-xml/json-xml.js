var xml = require("utils/v4/xml");
var response = require("http/v4/response");

var input = {
    a: {
        b: "text_b",
        c: "text_c",
        d: {
            e: "text_e"
        }
    }
};

var result = xml.fromJson(input);

console.log("XML: " + result);
response.println(JSON.stringify("XML: " + result));

response.flush();
response.close();