var response = require("http/v4/response");
var procedure = require("db/v4/procedure");

let sql = " \
CREATE PROCEDURE CUSTOMERS_BY_COUNTRY_AND_ALL_CUSTOMERS (in country varchar(50), out customersByCountry CUSTOMERS, out allCustomers CUSTOMERS) \
AS \
  BEGIN \
    customersByCountry = SELECT * FROM CUSTOMERS WHERE COUNTRY = :country; \
    allCustomers = SELECT * FROM CUSTOMERS; \
  END; \
";

procedure.create(sql);

response.println("Procedure created");
response.flush();
response.close();