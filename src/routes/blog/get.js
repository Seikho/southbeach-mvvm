var db = require("../../store/db");
var route = {
    method: "GET",
    path: "/blog",
    handler: function (request, reply) {
        get().then(function (entries) {
            reply(entries);
        });
    }
};
function get() {
    return db("blog").select();
}
module.exports = route;
