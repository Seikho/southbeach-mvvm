import knex = require("knex");
import path = require("path");
export = connection;

var connection = knex({
    client: "sqlite",
    connection: {
        filename: path.join(__dirname, "../southbeach.db")
    }
});
