var route = {
    method: "PUT",
    path: "/blog",
    handler: function (request, reply) {
        reply("PUT");
    }
};
module.exports = route;
