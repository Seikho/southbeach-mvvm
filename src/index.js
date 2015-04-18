var Hapi = require("hapi");
var Promise = require("bluebird");
var log = require("./logger");
var staticRoutes = require("./routes/static");
var getPort = Promise.promisify(require("portfinder").getPort);
var server = new Hapi.Server();
getPort().then(function (port) {
    server.connection({
        port: port
    });
    for (var route in staticRoutes)
        server.route(staticRoutes[route]);
    server.start(function () { return log.info("Web server listening on port " + port); });
});
