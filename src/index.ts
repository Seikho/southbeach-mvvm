import Hapi = require("hapi");
import Promise = require("bluebird");
import path = require("path");
import log = require("./logger");
import staticRoutes = require("./routes/static");

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

    server.route(staticRoutes.knockout);
    server.route(staticRoutes.bootstrap);

    server.start(() => log.info("Web server listening on port " + port));
});
