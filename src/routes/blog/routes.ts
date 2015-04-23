import hapi = require("hapi");
import post = require("./post");
import get = require("./get");
import put = require("./put");
export = routes;

var routes = {
    read: get,
    update: post,
    delete: put
}
