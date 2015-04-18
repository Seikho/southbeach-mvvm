var Hapi = require("hapi");
var Promise = require("bluebird");
var path = require("path");
var log = require("./logger");
var staticRoutes = require("./routes/static");
var getPort = Promise.promisify(require("portfinder").getPort);
var publicPath = path.join(__dirname, "public/");
var server = new Hapi.Server();
getPort().then(function (port) {
    server.connection({
        port: port
    });
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: publicPath
            }
        }
    });
    server.route(staticRoutes.knockout);
    server.route(staticRoutes.bootstrap);
    server.start(function () { return log.info("Web server listening on port " + port); });
});
