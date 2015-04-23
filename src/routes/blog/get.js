var route = {
    method: "GET",
    path: "/blog",
    handler: function (request, reply) {
        reply("GET");
    }
};
module.exports = route;
