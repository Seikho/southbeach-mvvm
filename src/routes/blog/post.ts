export = route;
var route = {
    method: "POST",
    path: "/blog",
    handler: (request, reply) => {
        reply("POST");
    }
}
