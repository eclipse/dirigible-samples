var rs = require("http/v4/rs");

rs.service()
    // serve GET HTTP requests sent to resource path ""
    .resource("")
    .get(function (ctx, request, response) {
        response.println("Hello World!");
    })
    // serve GET HTTP requests sent to resource path "hello/{name}" e.g "hello/John"
    .resource("hello/{name}")
    .get(function (ctx, request, response) {
        let name = ctx.pathParameters.name;
        response.println("Hello " + name + "!");
    })
    .execute();