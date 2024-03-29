var database = require("db/v4/database");
var response = require("http/v4/response");

var connection = database.getConnection();
try {
    var statement = connection.prepareStatement("select * from DIRIGIBLE_EXTENSIONS where EXTENSION_EXTENSIONPOINT_NAME = ?");
    var i = 0;
    statement.setString(++i, "ide-view");
    var resultSet = statement.executeQuery();
    while (resultSet.next()) {
        response.println("[location]: " + resultSet.getString("EXTENSION_LOCATION"));
    }
    resultSet.close();
    statement.close();
} catch (e) {
    console.trace(e);
    response.println(e.message);
} finally {
    connection.close();
}

response.flush();
response.close();