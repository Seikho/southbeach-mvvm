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
    server.route(staticRoutes.public);
    server.route(staticRoutes.knockout);
    server.route(staticRoutes.bootstrap);
    server.start(function () { return log.info("Web server listening on port " + port); });
});
