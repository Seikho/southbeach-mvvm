var path = require("path");
var routes = [];
routes.push({
    method: 'GET',
    path: 'bootstrap.css',
    handler: {
        file: path.join(__dirname, "../../../node_modules/bootstrap/dist/css/bootstrap.css")
    }
});
routes.push({
    method: 'GET',
    path: 'bootstrap.js',
    handler: {
        file: path.join(__dirname, "../../../node_modules/bootstrap/dist/js/bootstrap.js")
    }
});
routes.push({
    method: 'GET',
    path: '/fonts/{param*}',
    handler: {
        file: path.join(__dirname, "../../../node_modules/bootstrap/dist/fonts/")
    }
});
module.exports = routes;
