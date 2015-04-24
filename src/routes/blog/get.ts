import db = require("../../store/db");
export = route;

var route = {
    method: "GET",
    path: "/blog",
    handler: (request, reply) => {
        get().then(entries => {
            reply(entries);
        });
    }
}

function get() {
    return db("blog").select();
}
