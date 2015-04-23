var route = {
    method: "POST",
    path: "/blog",
    handler: function (request, reply) {
        reply("POST");
    }
};
module.exports = route;
