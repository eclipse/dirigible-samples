var response = require("http/v4/response");
var database = require("db/v4/database");

let connection = null;

try {
    connection = database.getConnection();
    let hasMoreResults = false;
    let sql = "CALL CUSTOMERS_BY_COUNTRY_AND_ALL_CUSTOMERS(COUNTRY => 'Bulgaria', customersByCountry => ?, allCustomers => ?)";
    let callableStatement = connection.prepareCall(sql);
    let resultSet = callableStatement.executeQuery();

    do {
        while (resultSet.next()) {
            response.println("Name: " + resultSet.getString("NAME") + ", Country: " + resultSet.getString("COUNTRY"));
        }
        hasMoreResults = callableStatement.getMoreResults();
        if (hasMoreResults) {
            resultSet.close();
            resultSet = callableStatement.getResultSet();
            response.println("\n---- End of ResultSet ----\n");
        }
    } while (hasMoreResults)

    callableStatement.close();
} finally {
    if (connection != null) {
        connection.close();
    }
}

response.flush();
response.close();