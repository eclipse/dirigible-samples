var xml2json = require("utils/v4/xml");
var response = require("http/v4/response");

var input = "<a><b>text_b</b><c>text_c</c><d><e>text_e</e></d></a>";
var result = xml2json.toJson(input);
var json = JSON.parse(result);

console.log("JSON: " + JSON.stringify(json));
response.println(JSON.stringify(json));

response.flush();
response.close();