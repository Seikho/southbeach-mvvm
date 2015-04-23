import Hapi = require("hapi");
import Promise = require("bluebird");
import path = require("path");
import log = require("./logger");
import initialise = require("./store/index");
import routes = require("./routes/all");

var getPort = Promise.promisify(require("portfinder").getPort);

var server = new Hapi.Server();

getPort().then((port: number) => {

    server.connection({
        port: port
    });

    server.route(routes);

    server.start(() => log.info("Web server listening on port " + port));
    initialise();
});
