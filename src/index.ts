import Hapi = require("hapi");
import Promise = require("bluebird");
import path = require("path");
import log = require("./logger");
var getPort = Promise.promisify(require("portfinder").getPort);

var publicPath = path.join(__dirname, "public/");
log.debug(publicPath);

var server = new Hapi.Server();

getPort().then((port: number) => {

    server.connection({
        port: port
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory:{
                path: publicPath
            }
        }
    });

    server.start(() => {
        log.info("Server listening on port " + port);
    });
});
