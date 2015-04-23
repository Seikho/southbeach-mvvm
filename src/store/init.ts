import db = require("./db");
export = init;

var hasTable = db.schema.hasTable("blog");

var create = db.schema.createTable("blog", table => {
    table.integer("id").primary();
    table.string("entryDate");
    table.string("title");
    table.string("content");
    table.string("author");
});

var init = {
    hasTable: hasTable,
    create: create
}
