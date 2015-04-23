export = route;
var route = {
    method: "GET",
    path: "/blog",
    handler: (request, reply) => {
        reply("GET");
    }
}
