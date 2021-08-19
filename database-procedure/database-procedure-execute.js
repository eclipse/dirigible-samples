var response = require("http/v4/response");
var procedure = require("db/v4/procedure");

let sql = "CALL CUSTOMERS_BY_COUNTRY_AND_ALL_CUSTOMERS(COUNTRY => ?, customersByCountry => ?, allCustomers => ?)";
let result = procedure.execute(sql, ["Bulgaria"]);

response.println(JSON.stringify(result));
response.flush();
response.close();