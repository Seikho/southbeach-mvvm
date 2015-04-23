var blogRoutes = require("./blog/routes");
var staticRoutes = require("./static");
var routes = [];
for (var route in staticRoutes)
    routes.push(staticRoutes[route]);
for (var route in blogRoutes)
    routes.push(blogRoutes[route]);
module.exports = routes;
