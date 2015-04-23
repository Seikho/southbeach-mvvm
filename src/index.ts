import Hapi = require("hapi");
import Promise = require("bluebird");
import path = require("path");
import log = require("./logger");
import staticRoutes = require("./routes/static");
import initialise = require("./store/index");

var getPort = Promise.promisify(require("portfinder").getPort);

var server = new Hapi.Server();

getPort().then((port: number) => {

    server.connection({
        port: port
    });

    for (var route in staticRoutes) server.route(staticRoutes[route]);

    server.start(() => log.info("Web server listening on port " + port));
    initialise();
});
