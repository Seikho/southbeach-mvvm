var path = require("path");
var routes = [];
routes.push({
    method: 'GET',
    path: '/cajon.js',
    handler: {
        file: path.join(__dirname, "../../../node_modules/cajon/cajon.js")
    }
});
routes.push({
    method: 'GET',
    path: '/text.js',
    handler: {
        file: path.join(__dirname, "../../../node_modules/requirejs-text/text.js")
    }
});
module.exports = routes;
