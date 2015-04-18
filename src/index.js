var Hapi = require("hapi");
var Promise = require("bluebird");
var path = require("path");
var log = require("./logger");
var getPort = Promise.promisify(require("portfinder").getPort);
var publicPath = path.join(__dirname, "public/");
log.debug(publicPath);
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
    server.start(function () {
        log.info("Server listening on port " + port);
    });
});
