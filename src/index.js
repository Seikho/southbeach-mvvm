var Hapi = require("hapi");
var Promise = require("bluebird");
var log = require("./logger");
var initialise = require("./store/index");
var routes = require("./routes/all");
var getPort = Promise.promisify(require("portfinder").getPort);
var server = new Hapi.Server();
getPort().then(function (port) {
    server.connection({
        port: port
    });
    server.route(routes);
    server.start(function () { return log.info("Web server listening on port " + port); });
    initialise();
});
