export = route;
var route = {
    method: "PUT",
    path: "/blog",
    handler: (request, reply) => {
        reply("PUT");
    }
}
