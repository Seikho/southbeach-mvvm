import hapi = require("hapi");
import blogRoutes = require("./blog/routes");
import staticRoutes = require("./static");
export = routes;

var routes: hapi.IRouteConfiguration[] = [];

for (var route in staticRoutes) routes.push(staticRoutes[route]);
for (var route in blogRoutes) routes.push(blogRoutes[route]);
