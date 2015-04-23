var db = require("./db");
var hasTable = db.schema.hasTable("blog");
var create = db.schema.createTable("blog", function (table) {
    table.integer("id").primary();
    table.string("entryDate");
    table.string("title");
    table.string("content");
    table.string("author");
});
var init = {
    hasTable: hasTable,
    create: create
};
module.exports = init;
