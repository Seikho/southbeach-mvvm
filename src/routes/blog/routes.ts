import hapi = require("hapi");
import post = require("./post");
import get = require("./get");
import put = require("./put");
export = routes;

var routes = {
    get: get,
    post: post,
    put: put
}
