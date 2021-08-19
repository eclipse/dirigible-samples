var configurations = require("core/v4/configurations")
var response = require("http/v4/response");

var keys = configurations.getKeys();

var dirigibleKeys = {};

for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key.startsWith("DIRIGIBLE")) {
        var value = configurations.get(key);
        dirigibleKeys[key] = value;
    }
}

response.print(JSON.stringify(dirigibleKeys));