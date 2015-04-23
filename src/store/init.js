var knex = require("knex");
var path = require("path");
var connection = knex({
    client: "sqlite",
    connection: {
        filename: path.join(__dirname, "../southbeach.db")
    }
});
module.exports = connection;
